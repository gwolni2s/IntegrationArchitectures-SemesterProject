const axios = require('axios');
const baseUrl = 'https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX';
const config = {
    headers: {
        'Accept': 'application/json'
    },
    auth: {
        username: 'guest',
        password: 'guest',
    },
};

exports.getAllAccounts = async (req, res) => {
    const contacts = await axios
        .get(`${baseUrl}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account`,
        config
    );
    res.send(exports.filterAllCustomer(contacts));
}

exports.getAllSalesOrders = async (req, res) => {
    const orders = await axios
        .get(`${baseUrl}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder`,
            config
        );
    res.send(exports.filterAllSalesOrder(orders));
}

exports.getSalesOrder = async(req, res) => {
    const id = req.params['id'];
    const order = await axios
        .get(`${baseUrl}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder/${id}`,
            config
        );
    res.send(exports.filterSalesOrder(order));
}

exports.getCustomer = async(req, res) => {
    const id = req.params['id'];
    const customerData = await axios
        .get(`${baseUrl}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account/${id}`,
            config
        );
    res.send(exports.filterCustomerData(customerData));
}

exports.getSalesRep = async(req, res) => {
    const id = req.params['id'];
    const salesRepData = await axios
        .get(`${baseUrl}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account/${id}`,
            config
        );
    res.send(exports.filterSalesRepData(salesRepData));
}

exports.getSalesOrderPosition = async(req, res) => {
    const id = req.params['id'];
    const positionData = await axios
        .get(`${baseUrl}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder/${id}/position`,
            config
        );
    res.send(exports.filterPositionData(positionData));
}

/**
 * Get All Data filtered
 */
exports.getCompleteSalesOrdersData = async(req, res) => {
    let allData = [];
    let customerData;
    let positionData = [];
    let productData = [];
    let position;
    let salesRepData;

    function Data(order, customer, position, product, salesRep) {
        this._salesOrder = order;
        this._customer = customer;
        this._position = position;
        this._product = product;
        this._salesRep = salesRep;
    }
    let salesOrders = await
        axios.get(`${baseUrl}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder`,
            config
        );
    salesOrders = exports.filterAllSalesOrder(salesOrders);
    for(const i in salesOrders) {
        try {
            customerData = await
                axios.get(`${salesOrders[i]['_customerSalesOrder']}`,
                    config
                );
            positionData = await
                axios.get(`${salesOrders[i]['_identitySalesOrder']}/position`,
                    config
                );
            salesRepData = await
                axios.get(`${salesOrders[i]['_salesRepSalesOrder']}`,
                    config
                );
            position = exports.filterPositionData(positionData);
            productData = [];
            for(let x in position) {
                productData[x] = await
                    axios.get(`${position[x]['_product']}`,
                        config
                    );
                productData[x] = exports.filterProductData(productData[x]);
            }
            let data = new Data(
                salesOrders[i],
                exports.filterCustomerData(customerData),
                exports.filterPositionData(positionData),
                productData,
                exports.filterSalesRepData(salesRepData)
            );
            allData[i] = data;
        } catch(error) {
            console.log(error);
        }
    }
    //res.send(allData);
    allData = exports.filterCreatedAt(allData);
    return allData;
}

exports.getProduct = async(req, res) => {
    const id = req.params['id'];
    const productData = await axios
        .get(`${baseUrl}/org.opencrx.kernel.product1/provider/CRX/segment/Standard/product/${id}`,
            config
        );
    res.send(exports.filterProductData(productData));
}

/**
 * Filter functions
 */
exports.filterCreatedAt = (data) => {
    let sales = data;
    for(let i in sales) {
        sales[i]['_salesOrder']['_createdAtSalesOrder'] = sales[i]['_salesOrder']['_createdAtSalesOrder'].slice(0, 4);
    }
    return sales;
}

exports.filterCustomerData = (data) => {
    function customer(fullname, accountRating) {
        this._fullname = fullname;
        this._accountRating = accountRating;
    }
    const custom = new customer(
        data.data['fullName'],
        data.data['accountRating']
    );
    return custom;
}
exports.filterPositionData = (positionData) => {
    let posData = [];
    let pos;
    function position(product, quantity, productDescription) {
        this._product = product;
        this._quantity = quantity;
        this._productDescription = productDescription;
    }
    try {
        for(let i in positionData.data['objects']) {
            pos = new position(
                positionData.data['objects'][i]['product']['@href'],
                positionData.data['objects'][i]['quantity'],
                positionData.data['objects'][i]['productDescription']
            );
            posData[i] = pos;
        }
    } catch (error) {
        console.log(error);
    }
    return posData;
}
exports.filterProductData = (data) => {
    let prod;
    function product(name) {
        this._productName = name;
    }
    try {
        prod = new product(data.data['name']);
    } catch(error) {
        console.log(error);
    }
    return prod;
}
exports.filterAllSalesOrder = (data) => {
    let salesOrderData = [];
    function salesOrder(createdAt, name, customer, identity, salesRep) {
        this._createdAtSalesOrder = createdAt;
        this._nameSalesOrder = name;
        this._customerSalesOrder = customer;
        this._identitySalesOrder = identity;
        this._salesRepSalesOrder = salesRep
    }
    for(const x in data.data.objects) {
        const order = new salesOrder(
            data.data.objects[x]['createdAt'],
            data.data.objects[x]['name'],
            data.data.objects[x]['customer']['@href'],
            data.data.objects[x]['@href'],
            data.data.objects[x]['salesRep']['@href']
        );
        salesOrderData[x] = order;
    }
    return salesOrderData;
}
exports.filterSalesOrder = (data) => {
    function salesOrder(createdAt, name, customer, identity, salesRep) {
        this._createdAtSalesOrder = createdAt;
        this._nameSalesOrder = name;
        this._customerSalesOrder = customer;
        this._identitySalesOrder = identity;
        this._salesRepSalesOrder = salesRep;
    }
    const order = new salesOrder(
        data.data['createdAt'],
        data.data['name'],
        data.data['customer']['@href'],
        data.data['@href'],
        data.data['salesRep']['@href']
    );
    return order;
}
exports.filterAllCustomer = (data) => {
    let allCustomers = []
    function customer(fullname, accountRating) {
        this._fullname = fullname;
        this._accountRating = accountRating;
    }

    for (const x in data.data.objects) {
        const contact = new customer(
            data.data.objects[x]['fullName'],
            data.data.objects[x]['accountRating']
        );

        allCustomers[x] = contact;
    }
    return allCustomers;
}
exports.filterSalesRepData = (data) => {
    function salesRep(id, firstname, lastname, fullname,
                      organization, department, jobRole,
                      jobTitle, accountRating) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._fullname = fullname;
        this._organization = organization;
        this._department = department;
        this._jobRole = jobRole;
        this._jobTitle = jobTitle;
        this._accountRating = accountRating;
    }
    const rep = new salesRep(
        data.data['governmentId'],
        data.data['firstName'],
        data.data['lastName'],
        data.data['fullName'],
        data.data['organization'],
        data.data['department'],
        data.data['jobRole'],
        data.data['jobTitle'],
        data.data['accountRating']
    );
    return rep;
}
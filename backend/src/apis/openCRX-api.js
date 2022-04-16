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


exports.getAllCustomers = async (req, res) => {

    const contacts = await
        axios.get(`${baseUrl}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account`,
            config);

    const customers = contacts.data;

    console.log(customers);
    res.send(customers);
}

exports.getAllSalesOrders = async (req, res) => {

    const orders = await
        axios.get(`${baseUrl}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder`,
            config);

    const salesOrders = orders.data;

    console.log(salesOrders);
    res.send(salesOrders);
}

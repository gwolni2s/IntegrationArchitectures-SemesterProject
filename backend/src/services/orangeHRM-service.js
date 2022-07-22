const axios = require('axios');
const FormData = require('form-data');
const Salesman = require('../models/Salesman');

const baseUrl = 'https://sepp-hrm.inf.h-brs.de/symfony/web/index.php';

exports.getAccessToken = async (req, res) => {
    const result  = await axios.post(`${baseUrl}/oauth/issueToken`,
        {
            client_id: "api_oauth_id",
            client_secret: "oauth_secret",
            grant_type: "password",
            username: "Gwolny",
            password: "*Safb02da42Demo$"
        });

    return result.data['access_token'];
}

exports.getEmployees = async (req, res) => {
    const accessToken = await exports.getAccessToken();
    const result = await axios
        .get(`${baseUrl}/api/v1/employee/search`,
            {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
            }
    );
    //res.send(exports.filterAllSalesmen(result.data.data));
    return exports.filterAllSalesmen(result.data.data);
}
exports.getEmployee = async (req, res) => {
    const accessToken = await exports.getAccessToken();
    const id = req.params['id'];
    const result = await axios
        .get(`${baseUrl}/api/v1/employee/${id}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
        );
    res.send(exports.filterSalesmen(result));
}
exports.getBonusSalary = async (req, res) => {
    const accessToken = await exports.getAccessToken();
    const id = req.params['id'];
    const result = await axios
        .get(`${baseUrl}/api/v1/employee/${id}/bonussalary`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    res.send(result['data']);
}
exports.postBonusSalary = async (req, res) => {
    const id = req.params['id'];
    const year = req.query['year'];
    const value = req.query['value'];
    const accessToken = await exports.getAccessToken();
    let formData = new FormData();
    formData.append('year', year);
    formData.append('value', value);
    const formHeaders = formData.getHeaders();
    await axios
        .post(`${baseUrl}/api/v1/employee/${id}/bonussalary`,
        formData,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                ...formHeaders
            }
        });
    res.send("Bonus Salary was successfully saved in OrangeHRM");
}
/**
 * Filer functions
 */
exports.filterSalesmen = (data) => {
    return new Salesman(
        data.data.data['employeeId'],
        data.data.data['code'],
        data.data.data['firstName'],
        data.data.data['lastName'],
        data.data.data['unit']
    );
}


exports.filterAllSalesmen = (data) => {
    let salesmen = [];
    for(let i in data) {
     salesmen[i] = new Salesman(
         data[i]['employeeId'],
         data[i]['code'],
         data[i]['firstName'],
         data[i]['lastName'],
         data[i]['unit']
     );
    }
    return salesmen;
}
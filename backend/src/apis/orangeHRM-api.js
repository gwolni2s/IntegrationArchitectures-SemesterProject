const axios = require('axios');
const {getAccessToken} = require("./orangeHRM-api");

const baseUrl = 'https://sepp-hrm.inf.h-brs.de/symfony/web/index.php';
let accessToken = null;

exports.getAccessToken = async(req, res) => {

    const result  = await axios.post(`${baseUrl}/oauth/issueToken`,
                                    {
                                        client_id: "api_oauth_id",
                                        client_secret: "oauth_secret",
                                        grant_type: "password",
                                        username: "Gwolny",
                                        password: "*Safb02da42Demo$"
                                    });

    accessToken = result.data['access_token'];
    console.log(accessToken);
    res.send(accessToken);
}

exports.getEmployees = async(req, res) => {

    await getAccessToken();

    const result = await axios.get(`${baseUrl}/api/v1/employee/search`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    console.log(result['data']);
    res.send(result['data']);
}

exports.getEmployee = async(req, res) => {
    const id = req.params['id'];
    const result = await axios.get(`${baseUrl}/api/v1/employee/${id}`,
        {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    console.log(result['data']);
    res.send(result['data']);
}

exports.getBonusSalary = async(req, res) => {
    const id = req.params['id'];
    const result = await axios.get(`${baseUrl}/api/v1/employee/${id}/bonussalary`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

    console.log(result['data']);
    res.send(result['data']);
}

exports.postBonusSalary = async(req, res) => {
    console.log('post Bonus Salary function is called');
    const id = req.params['id'];
    const year = req.query['year'];
    const value = req.query['value'];

    const result = await axios.post(`${baseUrl}/api/v1/employee/${id}/bonussalary`,
        {
            year: year,
            value: value
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

    console.log(result['data']);
    res.send(result['data']);
}








const axios = require('axios');
const FormData = require('form-data');

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
    res.send(result['data']);
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
    res.send(result['data']);
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

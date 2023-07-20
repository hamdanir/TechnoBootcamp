import axios from "axios";

const Satellite = axios.create({
    baseURL: 'https://be-rmy.dev.berijalan.co.id/rest/v1/',
    timeout: 10000, // milisecond
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
})

Satellite.interceptors.response.use(
    (response) => {
        console.log("Success satellite", JSON.stringify(response, null, 2));
        return response;
    },
    (error) => {
        console.log("Error satellite", JSON.stringify(error, null, 2))
    }
);

export default Satellite;

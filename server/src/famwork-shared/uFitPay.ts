import axios from "axios";

// Set the API credentials
// const apiKey = 'pub-FiQxwsccGGMHT8rVLjiQQqxAc73XoKBm';
// const apiToken = 'sec-QYzzs8Y5ahvuRmU8iUHAYintSIIsETxS';
const apiKey = "TSVLWCB5TO5RfJFCNkwSX8z0F8ZwD91";
const apiToken = "TS66uEwtekJEcWiwzC1gDdiDzKcJFk1";

// Create an instance of Axios with the base URL
export const UFitPay = axios.create({
    baseURL: "https://api.ufitpay.com/v1", // Replace with your API URL
});

// Set the default headers for authentication
UFitPay.defaults.headers.common["Api-Key"] = apiKey;
UFitPay.defaults.headers.common["API-Token"] = apiToken;

// // Make authenticated requests using Axios
// api.get('/endpoint')
//     .then(response => {
//         // Handle the response
//         console.log(response.data);
//     })
//     .catch(error => {
//         // Handle any errors
//         console.error(error);
//     });

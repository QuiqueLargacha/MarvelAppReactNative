import axios from "axios";

export default axios.create({
    baseURL: "https://gateway.marvel.com"
    /*headers: {
        //Authorization: "Bearer ",
        ts: 1,
        apiKey: "e06cf97854b0e03486e2360866b0851a",
        hash: "5be8080ce8c990af9286b6152f61586e"
    }*/
});
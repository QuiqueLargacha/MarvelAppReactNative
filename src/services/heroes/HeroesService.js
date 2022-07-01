import { useEffect, useState} from "react";
import HeroesApiServiceBase from "../base/HeroesApiServiceBase";

export default () => {
    const [heroes, setHeroes] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const getHeroes = async () => {
        try {
            const response = await HeroesApiServiceBase.get("/v1/public/characters?limit=100&ts=1&apikey=e06cf97854b0e03486e2360866b0851a&hash=5be8080ce8c990af9286b6152f61586e", {
                /*params: {
                    limit: 100,
                    ts: "1",
                    apiKey: "e06cf97854b0e03486e2360866b0851a",
                    hash: "5be8080ce8c990af9286b6152f61586e"
                }*/
            });
            setHeroes(response.data.data.results);
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        getHeroes();
    }, []);

    return [heroes, errorMessage];
};
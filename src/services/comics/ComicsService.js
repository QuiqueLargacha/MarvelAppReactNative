import { useEffect, useState} from "react";
import HeroesApiServiceBase from "../base/HeroesApiServiceBase";

export default (idHero) => {
    const [comics, setComics] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const getComics = async (idHero) => {
        try {
            const response = await HeroesApiServiceBase.get(`/v1/public/characters/${idHero}/comics?ts=1&apikey=e06cf97854b0e03486e2360866b0851a&hash=5be8080ce8c990af9286b6152f61586e`);
            setComics(response.data.data.results);
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        getComics(idHero);
    }, []);

    return [comics, errorMessage];
};
import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import HeroesService from "../../../services/heroes/HeroesService";
import HeroesList from "../components/HeroesList";

const HeroesListScreen = () => {
    const [heroes, errorMessage] = HeroesService();

    const filterHeroesByDescription = (heroes) => {
        return heroes.filter(hero => {
            return hero.description != "";
        })
    };

    return (
        <View>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <HeroesList heroes={filterHeroesByDescription(heroes)}/>
        </View>
    );
};

const styles = StyleSheet.create ({});

export default HeroesListScreen;
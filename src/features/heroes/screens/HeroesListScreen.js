import React from "react";
import { View, Text, StyleSheet, Button, FlatList, Image } from "react-native";
import HeroesService from "../../../services/heroes/HeroesService";

const HeroesListScreen = ({ navigation }) => {
    const [heroes, errorMessage] = HeroesService();

    return (
        <View>
            <Text>List Screen</Text>
            <Button
                title="Go to Detail screen" 
                onPress={() => navigation.navigate("HeroesDetail")} />
            <Text>Numero de heroes: {heroes.length}</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create ({});

export default HeroesListScreen;
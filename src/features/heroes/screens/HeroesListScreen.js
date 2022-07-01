import React from "react";
import { View, Text, StyleSheet, Button, FlatList, Image } from "react-native";

const HeroesListScreen = ({ navigation }) => {

    return (
        <View>
            <Text>List Screen</Text>
            <Button
                title="Go to Detail screen" 
                onPress={() => navigation.navigate("HeroesDetail")} />
        </View>
    );
};

const styles = StyleSheet.create ({});

export default HeroesListScreen;
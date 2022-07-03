import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import HeroListItem from "./HeroListItem";

const HeroesList = ({ heroes, navigation }) => {
    
    return (
        <View style={styles.content}>
            <FlatList
                data={heroes}
                keyExtractor={(hero) => hero.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("HeroesDetail", { hero: item })}>
                            <HeroListItem hero={item} />
                        </TouchableOpacity>
                    )
                }} />
        </View>
    );
};

const styles = StyleSheet.create ({
    content: {
        margin: 20
    }
});

export default withNavigation(HeroesList);
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HeroListItem = ({ hero }) => {
    
    return (
        <View style={styles.content}>
            <View>
                <Image style={styles.image} source={{ uri: hero.thumbnail.path + "." + hero.thumbnail.extension }} />
            </View>
            <View>
                <Text style={styles.name}>{hero.name}</Text>
                <Text>Comics: {hero.comics.items.length}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    content: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 115,
        height: 115,
        borderRadius: 80,
        margin: 10
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20
    }
});

export default HeroListItem;
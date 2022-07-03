import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ComicsService from "../../../services/comics/ComicsService";
import ComicListItem from "../components/ComicListItem";

const HeroesDetailScreen = ({ navigation }) => {
    const hero = navigation.getParam("hero");

    const [comics, errorMessage] = ComicsService(hero.id);

    return (
        <View>
            <Image style={styles.image} source={{ uri: hero.thumbnail.path + "." + hero.thumbnail.extension }}/>
            <Text style={styles.name}>{ hero.name }</Text>
            <Text style={styles.description}>{ hero.description }</Text>
            <Text style={styles.titleList}>Comic List</Text>
            <FlatList
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={comics}
                keyExtractor={(comic) => comic.id}
                renderItem={({ item }) => {
                    return (
                        <ComicListItem comic={item} />
                    )
                }} />
        </View>
    );
};

const styles = StyleSheet.create ({
    image: {
        width: 420,
        height: 300
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 15,
        marginLeft: 15
    },
    description: {
        marginHorizontal: 15
    },
    titleList: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 5
    },
    list: {
        marginHorizontal: 15
    }
});

export default HeroesDetailScreen;
import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ComicListItem = ({ comic }) => {

    return (
        <View >
            <Image style={styles.image} source={{ uri: comic.thumbnail.path + "." + comic.thumbnail.extension }} />
        </View>
    );
};

const styles = StyleSheet.create ({
    image: {
        height: 250,
        width: 175,
        margin: 5
    }
});

export default ComicListItem;
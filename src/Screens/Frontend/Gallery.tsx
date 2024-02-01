import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
;

export default function Gallery() {
    return (
        <ScrollView>

        <View style={styles.flexContainer}>
            <TouchableOpacity>
                <Text>Press me</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create(
    {
        flexContainer: {
            justifyContent: "center",
            alignItems: "center",
        },
        flexImg: {
            height: 800,
            width:500,
        },
    }
)
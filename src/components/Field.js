import React from "react"
import { View, StyleSheet, Text } from "react-native"
import params from "../params"

export default props => {
    const { mined, opened, nearMines } = props

    const styleField = [styles.field]
    if (styleField.length === 1) styleField.push(styles.regular)

    return (
        <View style={styleField}>

        </View>
    )
}

const styles = StyleSheet.create ({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: "#999",
        borderLeftColor: "#CCC",
        borderTopColor: "#CCC",
        borderRightColor: "#333",
        borderBottomColor: "#333",
    }
})
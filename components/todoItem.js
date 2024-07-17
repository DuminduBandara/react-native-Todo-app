import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() =>  pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 20,
        borderColor: '#34a1eb',
        borderWidth: 2,
        borderRadius: 15,
        fontSize: 18
    }
})

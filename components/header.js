import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
       <Text style={styles.headerTitle}>My Todo List</Text> 
    </View>
  )
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: '#34a1eb',
    },
    headerTitle: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
})

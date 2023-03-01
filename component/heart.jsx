import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

// import { List } from 'react-native-paper';






export  function Heart() {

  const  fetchApi=async()=>{
    try {
      const response= await axios.get("http://192.168.1.3:8000/largeBox")
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
   fetchApi()
  }, []);



  return (
    <View style={{backgroundColor:"white",flex:1}}>
      <ScrollView>
       <Image style={{marginTop:50,marginBottom:50,marginLeft:"auto",marginRight:"auto"}}
       source={{
        width:300,
        height:300,
        uri:"https://i.pinimg.com/236x/5d/d9/e0/5dd9e0df72af466217b4d496b913e957.jpg"
       }}
       />
       <Text style={styles.title}>api title</Text>

      
        {/* <List.Item style={{marginTop:20,padding:10}} title="First item" /> */}
       
    
       </ScrollView>
    </View>
  )

      }
const styles = StyleSheet.create({
  title: {
    color:"#78A206",
    fontSize:30,
    textAlign:"center",

  }
})

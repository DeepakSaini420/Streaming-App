import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View,StyleSheet, TextInput } from "react-native";

const SearchComponent = ()=>{
    return(
        <View>
            <Icon name="search" size={20} color="#000"/>
            <TextInput style={styles.input} placeholder={'Search'} placeholderTextColor='grey'/>
        </View> 
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#382c3e',
        height:63,
        color:'#fff',
        borderRadius:12,
        paddingTop:1,
        fontSize:20,
        paddingLeft:18,

    }
})

export default SearchComponent
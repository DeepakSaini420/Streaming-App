import React from "react";
import {View,Text,Image,StyleSheet} from 'react-native'

const HomeScreenHead = ()=>{
    return (
        <View style={styles.container}>
            <Text style={{color:'white',fontSize:35}}>Hi,Deepak</Text>
            <View style={{borderRadius:40}}>
                <Image style={styles.img} source={{uri:'https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        height:65,
        alignItems:'center',
    },
    img:{
        resizeMode:'cover',
        borderRadius:50,
        width:50,
        height:50,
    },
})


export default HomeScreenHead
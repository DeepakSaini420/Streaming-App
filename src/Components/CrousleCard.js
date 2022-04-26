import React from "react";
import { View,Image,StyleSheet } from 'react-native'


const CrousleCard =({...props})=>{
    return(
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:props.imgURL}} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        position:'relative',
        height:450,
        width:370,
        padding:13,
        marginTop:12,
        shadowColor: "#382c3e",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    image:{
        position:'relative',
        width:'100%',
        height:'100%',
        borderRadius:35

    }
})

export default CrousleCard
import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";

const CatCard = ({...props})=>{
    return (
        <TouchableOpacity style={styles.contianer} onPress={()=>{
            props.navigation.navigate('Movies',{category:props.name})
        }}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri:props.imgURL}}/>
            </View>
            <View>
                <Text style={{
                    color:'white'
                }}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contianer:{
        paddingRight:40
    },
    imgContainer:{
        position:'relative',
        width:230,
        marginTop:10,
        height:130
    },
    img:{
        position:'absolute',
        width:'100%',
        height:'100%',
        borderRadius:3
    }
})

export default CatCard
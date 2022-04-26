import React from "react";
import { Text,View,StyleSheet,Image, TouchableOpacity } from 'react-native'

const SlideCard = ({...props})=>{
    return (
        <TouchableOpacity style={styles.contianer} onPress={()=>{
            console.log(props.tag)
            props.navigation.navigate('video',{ id:props.tag })
        }}>
            <View style={styles.innContianer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{uri:props.imgURL}}/>
                </View>
                <View>
                    <Text style={{
                        color:'white'
                    }}>{props.name}</Text>
                    <Text style={{
                        color:'grey',
                        marginTop:2
                    }}>{props.year}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contianer:{
        paddingRight:40
    },
    innContianer:{
        height:350,
        width:150
    },
    imgContainer:{
        position:'relative',
        width:150,
        marginTop:10,
        height:300
    },
    img:{
        position:'absolute',
        width:'100%',
        height:'100%',
        borderRadius:3
    }
})

export default SlideCard
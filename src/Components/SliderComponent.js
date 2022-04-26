import React from "react";
import { View,FlatList,Text,StyleSheet,TouchableOpacity } from 'react-native'
import CatCard from "./catCard";
import SlideCard from "./SliderCard";

const SliderComponent = ({...props})=>{

    return (
        <View style={{marginTop:20}}>
            <View style={styles.text}>
                <Text style={{
                    color:'grey',
                    fontSize:23,
                    fontWeight:'600'
                    
                }}>{props.catogry}</Text>
                <TouchableOpacity>
                    <Text style={{
                        color:'#7c44c2',
                        fontSize:17,
                        fontWeight:'600'
                    }}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            data={props.data}
            horizontal={true}
            renderItem={({item})=>{
                if(item.cat==='Popular'){
                    return (
                        <SlideCard imgURL={item.imgURL} key={item.id} name={item.name} year={item.year} navigation={props.navigation} tag={item.tag}/>
                    )
                }else{
                    return (
                        <CatCard imgURL={item.imgURL} key={item.id} name={item.name} year={item.year} navigation={props.navigation}/>
                    )
                }
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
})

export default SliderComponent
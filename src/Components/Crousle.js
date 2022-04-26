import React from "react";
import { Text,View,StyleSheet, FlatList, Dimensions } from 'react-native'
import CrousleCard from "./CrousleCard";


const Crousle = ()=>{
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          imgURL: 'https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          imgURL: 'https://w0.peakpx.com/wallpaper/548/740/HD-wallpaper-batman-2021-iphone-justice-league-robert-pattinson.jpg',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          imgURL: 'https://moviegalleri.net/wp-content/uploads/2019/07/Actor-Sanjay-Dutt-as-Adheera-in-KGF-Chapter-2-Movie-Poster-HD.jpg',
        },
      ];
    return (
        
        <View style={styles.container}>
            <Text style={{color:'grey',fontSize:23,fontWeight:'600'}}>For You</Text>
            <FlatList
                data={DATA}
                horizontal={true}
                snapToAlignment={'start'}
                decelerationRate={'normal'}
                snapToInterval={Dimensions.get('window').width}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>{
                   return <CrousleCard imgURL={item.imgURL}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        marginLeft:8
    }
})

export default Crousle
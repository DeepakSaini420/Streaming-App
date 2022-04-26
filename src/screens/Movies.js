import React,{useState} from "react";
import { Text,StyleSheet,ScrollView,View,StatusBar, FlatList, SafeAreaView } from 'react-native'
import SearchComponent from "../Components/Search.component";
import SlideCard from "../Components/SliderCard";
import getVideosByCatgory from "../lib/videos";

const Movies = ({route,navigation})=>{
    const category = route.params.category + ' hollywood movies';
    const [dt,sDt] = useState([]);
    const data =async ()=>{
        sDt(await getVideosByCatgory({category}));
    }
    data();
    return (
        <SafeAreaView  style={styles.Container}>
            <ScrollView scrollEnabled={true}>
                <Text style={{color:'grey',fontSize:35,margin:12}}>{category}</Text>
                <SearchComponent/>
                <View style={styles.cardContainer}>
                    {
                        dt.map((item)=>{
                            return <SlideCard key={item.videoId} name={item.title} imgURL={item.imgUrl} tag={item.videoId} navigation={navigation}/>
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        Container:{
            backgroundColor:'black',
            color:'#211921',
            flex:1,
            paddingRight:10,
            paddingLeft:15,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        cardContainer:{
            display:'flex',
            width:400,
            flexDirection:'row',
            flexWrap:'wrap'
        }
})

export default Movies
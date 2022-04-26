import React,{useEffect} from "react";
import { SafeAreaView,StyleSheet,StatusBar, ScrollView,LogBox  } from 'react-native'
import Crousle from "../Components/Crousle";
import HomeScreenHead from "../Components/HomeScreenHead";
import SearchComponent from "../Components/Search.component";
import CardSlider from "../Components/cardSlider";

const HomeScreen = ({navigation})=>{    
        useEffect(() => {
            LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        }, [])
    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView scrollEnabled={true}>
                <HomeScreenHead/>
                <SearchComponent/>
                <Crousle/>
                <CardSlider navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'black',
        color:'#211921',
        paddingRight:10,
        paddingLeft:15,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    
})

export default HomeScreen
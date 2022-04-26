import React from "react";
import {Text,View,StyleSheet,StatusBar} from 'react-native'
import { WebView } from 'react-native-webview'

const Videos = ({route})=>{
    const id = route.params.id
    return(
        <View style={styles.Container}>
            <WebView
                style={styles.container}
                javaScriptEnabled={true}
                source={{
                uri: `https://www.youtube.com/embed/${id}?rel=0&autoplay=0&showinfo=0&controls=0`,
                }}
                allowsFullscreenVideo={true}
            />
        </View>
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
})

export default Videos

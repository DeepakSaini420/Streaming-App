import React from "react";
import {View} from 'react-native'
import SliderComponent from "./SliderComponent";

const CardSlider = ({navigation})=>{
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          imgURL: 'https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg',
          name:'Family Man',
          year:2021,
          cat:'Popular',
          tag:'XatRGut65VI'
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          imgURL: 'https://w0.peakpx.com/wallpaper/548/740/HD-wallpaper-batman-2021-iphone-justice-league-robert-pattinson.jpg',
          name:'Batman',
          year:2022,
          cat:'Popular',
          tag:'n9rxxwcZGnk'
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          imgURL: 'https://moviegalleri.net/wp-content/uploads/2019/07/Actor-Sanjay-Dutt-as-Adheera-in-KGF-Chapter-2-Movie-Poster-HD.jpg',
          name:'KGF Chapter 2',
          year:2022,
          cat:'Popular',
          tag:'JKa05nyUmuQ'
        },
      ];
      const DATA1 = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          imgURL: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
          name:'Horror',
          cat:'Geners'
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          imgURL: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          name:'Comdey',
          cat:'Geners'
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          imgURL: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          name:'Romantic',
          cat:'Geners'
        },
      ];
    return (
        <View>
            <SliderComponent catogry="Popular" data={DATA} navigation={navigation}/>
            <SliderComponent catogry="Geners" data={DATA1} navigation={navigation}/>
        </View>
    )
}



export default CardSlider
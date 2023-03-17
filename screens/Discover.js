import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Avatar,Restaurants,Hotels,Attractions,NotFound} from '../assets'
import { FontAwesome } from '@expo/vector-icons'; 
import Menucontainer from '../components/Menucontainer';
import ItemCardContainer from '../components/ItemCardContainer';
import {Places} from '../assets/demo';
import { getPlaces } from '../api';


const Discover = () => {
    const navigation = useNavigation();
    const [type, setType] = useState("all");
    const [isloading, setIsloading] = useState(false);
    const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false
    })
  }, [])

  useEffect(() => {
    setIsloading(true);
    getPlaces().then((data)=>{
      setMainData(data);
      setType(type);
      setInterval(()=>{
        setIsloading(false);
      },2000)
    })

  }, [type])
  

  return (
    <SafeAreaView className="flex-1 relative bg-white mt-10">
    <View className="flex-row items-center justify-between px-8">
    <View>
    <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
    <Text className="text-[#527283] text-[36px]">the beauty today</Text>
    </View>
    <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
    <Animatable.Image
      animation="fadeIn"
      easing='ease-in-out'
      source={Avatar}
      className="w-full h-full object-cover rounded-md"
      />
    </View>
    </View>
    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    </View> 
      {/*Circle section */}
      {
        isloading ? <View className='flex-1 items-center justify-center'><ActivityIndicator size="large" color="#0b646b" /></View> : (<ScrollView className="flex-col">
        <View className=" flex-row items-center justify-between px-5 mt-8">
          <Menucontainer key={"hotel"} title="Hotels" imageSrc={Hotels} type={type} setType={setType} />
          <Menucontainer key={"attractions"} title="Attractions" imageSrc={Attractions} type={type} setType={setType} />
          <Menucontainer key={"restaurants"} title="Restaurants" imageSrc={Restaurants} type={type} setType={setType} />
          </View>
  
          <View>
              <View className="flex-row items-center justify-between px-3 mt-6">
              <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
              </TouchableOpacity>
              </View>
              <View className="px-3 mt-6 flex-row items-center justify-evenly flex-wrap">
              {
                type === "attractions" ? (Places.filter((place)=>( place.type === type)).map((place,idx)=>(
                  <ItemCardContainer key={idx} imageSrc={place.imageSrc} title={place.title} location={place.location} type={place.type} data={place}/>
                ))):type === "hotels" ? (Places.filter((place)=>( place.type === type)).map((place,idx)=>(
                  <ItemCardContainer key={idx} imageSrc={place.imageSrc} title={place.title} location={place.location} type={place.type} data={place}/>
                ))):type === "restaurants" ? (Places.filter((place)=>( place.type === type)).map((place,idx)=>(
                  <ItemCardContainer key={idx} imageSrc={place.imageSrc} title={place.title} location={place.location} type={place.type} data={place}/>
                ))):type === "all" ? (Places.map((place,idx)=>(
                  <ItemCardContainer key={idx} imageSrc={place.imageSrc} title={place.title} location={place.location} type={place.type} data={place}/>
                ))):<></>
              }

             
              
          
              </View>
          </View>
        </ScrollView>)
      }
      
    </SafeAreaView>
  )
}

export default Discover
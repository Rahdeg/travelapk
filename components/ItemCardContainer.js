import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({imageSrc,title,location,type,data}) => {

  const navigation = useNavigation();

  return (
   <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-2 py-2 shadow-md bg-white w-[162px] my-2"
   onPress={()=>navigation.navigate("Views",{param:data})}
   >
   <Image 
  source={imageSrc}
  className="w-full h-40 object-cover"
  />
    <Text className='text-[#428288] text-[18px] font-bold'>{title?.length > 14 ? `${title.slice(0,14)}..`:title}</Text>
    <View className="flex-row items-center space-x-1 ">
    <MaterialIcons name="location-on" size={20} color="#8597A2" />
    <Text className='text-[#428288] text-[14px] font-bold'>{location?.length > 18 ? `${location.slice(0,18)}..`:location}</Text>
    </View>
   </TouchableOpacity>
  )
}

export default ItemCardContainer
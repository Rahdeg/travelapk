import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const Menucontainer = ({title,imageSrc,type,setType}) => {
  const handlePress =()=>{
    setType(title.toLowerCase())
  }

  return (

    
  <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
  <View className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${type === title.toLowerCase() ? " bg-gray-300" : ''}`}
  
  >
  <Image 
  source={imageSrc}
  className="w-full h-full object-cover"
  />
  </View>
  <Text className=" text-[#00bcc9] text-xl font-semibold">{title}</Text>
  
  </TouchableOpacity>
   
    
  )
}

export default Menucontainer
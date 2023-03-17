import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const Views = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative mt-3">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="bg-white relative shadow-lg">
          <Image
            source={data.imageSrc}
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row justify-between inset-x-0 top-5 px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 items-center justify-center rounded-md bg-white"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06b2be" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-md bg-[#06b2be]">
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row justify-between inset-x-0 bottom-5 px-6">
            <View className="flex-row items-center space-x-2">
              <Text className="text-[12px] font-bold text-gray-100">
                {data.priceLevel}
              </Text>
              <Text className="text-[32px] font-bold text-gray-100">
                {data.price}
              </Text>
            </View>
            <View className="px-2  rounded-md bg-teal-100 items-center justify-center">
              <Text>{data.status}</Text>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data.title}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={24} color="black" />
            <Text className="text-[#8c9ea6] text-[20px] font-bold">
              {data.location}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between mt-4">
          {data?.rating && (
            <View className="flex-row items-center  space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
              <FontAwesome name="star" size={24} color="#d58574" />
              </View>
              <View className="flex-col  justify-center">
                <Text className="text-[#515151]">{data.rating}</Text>
                <Text className="text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}
          {data?.price && (
            <View className="flex-row items-center  space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="dollar" size={24} color="#d58574" />
              </View>
              <View className="flex-col  justify-center">
                <Text className="text-[#515151]">{data.price}</Text>
                <Text className="text-[#515151]">Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className="flex-row items-center  space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="map-signs" size={24} color="#d58574" />
              </View>
              <View className="flex-col  justify-center">
                <Text className="text-[#515151]">{data.bearing}</Text>
                <Text className="text-[#515151]">Bearing</Text>
              </View>
            </View>
          )}
        </View>
        {
            data?.description && (
                <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97a6af]">
                {data?.description}
                </Text>
            )
        }
        <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
        <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
        <Text>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
        <Text>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
        <Text>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
        <Text>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
        <Text>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
        <Text>Seafood</Text>
        </TouchableOpacity><TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100">
        <Text>Seafood</Text>
        </TouchableOpacity>
        </View>
        <View className=" space-y-2 mt-3 bg-gray-100 rounded-2xl px-4 py-3 mb-12">
            <View className="items-center flex-row space-x-6">
            <FontAwesome name="phone" size={24} color="#428288" />
            <Text className="text-lg">08106473829</Text>
            </View>
            <View className="items-center flex-row space-x-6">
            <MaterialIcons name="email" size={24} color="#428288" />
            <Text className="text-lg">walett95@gmail.com</Text>
            </View>
            <View className="items-center flex-row space-x-6">
            <FontAwesome name="map-pin" size={24} color="black" />
            <Text className="text-lg">Olomoore Abeokuta</Text>
            </View>
            <View className="  px-3 py-3 rounded-lg bg-[#06b2be] items-center justify-center mb-2">
            <Text className=" text-2xl font-semibold uppercase tracking-wider text-gray-100">
            Book Now
            </Text>
            </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Views;

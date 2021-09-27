import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: 123,
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 456,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Eat Screen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-400`}>
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{ uri: item.image }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

import { FlatList, SafeAreaView } from "react-native";
import { globalStyle } from "../Styles/Global";
import { DATA } from "../Storage/Data";
import { Item } from "../Components/Item";
import React from "react";

export const List = () => {
  return (
    <SafeAreaView style={globalStyle.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

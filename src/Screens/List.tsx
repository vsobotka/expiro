import { Button, FlatList, SafeAreaView } from "react-native";
import { globalStyle } from "../Styles/Global";
import { DATA } from "../Storage/Data";
import { Item } from "../Components/Item";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "List">;

export const List = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={globalStyle.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id}
      />
      <Button
        onPress={() => navigation.navigate("MyModal")}
        title="Open Modal"
      />
    </SafeAreaView>
  );
};

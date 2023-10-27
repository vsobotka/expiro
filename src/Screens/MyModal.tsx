import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import React from "react";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "MyModal">;

export function MyModal({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

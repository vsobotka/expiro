import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, TextInput, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { RootStackParamList } from "../../App";
import { globalStyle } from "../Styles/Global";
import { Context } from "../Context";
import { DatePicker } from "../Components/DatePicker";
import { ItemType } from "../Storage/Data";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export function ItemDetail({ navigation, route }: Props) {
  const { addToList, list } = useContext(Context);

  const [item, setItem] = useState({
    id: new Date().getTime().toString(),
    title: "",
    expirationTimestamp: new Date().getTime(),
  } as ItemType);

  useEffect(() => {
    if (route.params.id) {
      const item = list?.find((item) => item.id === route.params.id);
      if (item) {
        setItem(item)
      }
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={globalStyle.input}
        value={item.title}
        onChangeText={(newText) => setItem({...item, title: newText})}
      />
      <DatePicker
        value={new Date(item.expirationTimestamp)}
        onChange={(_, newDate) =>
          setItem({...item, expirationTimestamp: newDate?.getTime() ?? 0})
        }
      />
      <Button
        onPress={() => {
          addToList(item);
          navigation.goBack();
        }}
        title="Save"
      />

      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

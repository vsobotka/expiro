import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, TextInput, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { RootStackParamList } from "../../App";
import { globalStyle } from "../Styles/Global";
import { Context } from "../Context";
import { DatePicker } from "../Components/DatePicker";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export function ItemDetail({ navigation, route }: Props) {
  const { addToList, list } = useContext(Context);

  const [id, setId] = useState(route.params.id || new Date().getTime().toString());
  const [title, setTitle] = useState("");
  const [expirationTimestamp, setExpirationTimestamp] = useState(
    new Date().getTime(),
  );

  useEffect(() => {
    if (route.params.id) {
      const item = list?.find((item) => item.id === route.params.id);
      if (item) {
        setTitle(item.title);
        setExpirationTimestamp(item.expirationTimestamp);
      }
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={globalStyle.input}
        value={title}
        onChangeText={(newText) => setTitle(newText)}
      />
      <DatePicker
        value={new Date(expirationTimestamp)}
        onChange={(_, newDate) =>
          setExpirationTimestamp(newDate?.getTime() ?? 0)
        }
      />
      <Button
        onPress={() => {
          addToList({
            id: id,
            title,
            expirationTimestamp,
          });
          navigation.goBack();
        }}
        title="Save"
      />

      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

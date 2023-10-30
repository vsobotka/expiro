import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { RootStackParamList } from "../../App";
import { globalStyle } from "../Styles/Global";
import { Context } from "../Context";
import { DatePicker } from "../Components/DatePicker";

type Props = NativeStackScreenProps<RootStackParamList, "MyModal">;

export function MyModal({ navigation }: Props) {
  const { addToList } = useContext(Context);
  const [title, setTitle] = useState("");
  const [expirationTimestamp, setExpirationTimestamp] = useState(
    new Date().getTime(),
  );

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
            id: new Date().getTime().toString(),
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

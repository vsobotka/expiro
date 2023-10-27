import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { RootStackParamList } from "../../App";
import { globalStyle } from "../Styles/Global";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Context } from "../Context";

type Props = NativeStackScreenProps<RootStackParamList, "MyModal">;

export function MyModal({ navigation }: Props) {
  const { addToList } = useContext(Context);
  const [title, setTitle] = useState("");
  const [expirationTimestamp, setExpirationTimestamp] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={globalStyle.input}
        value={title}
        onChangeText={(newText) => setTitle(newText)}
      />
      <RNDateTimePicker
        value={new Date()}
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

import { Button, FlatList, SafeAreaView } from "react-native";
import { globalStyle } from "../Styles/Global";
import { Item } from "../Components/Item";
import React, { useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { Context } from "../Context";

type Props = NativeStackScreenProps<RootStackParamList, "List">;

export const List = ({ navigation }: Props) => {
  const { list } = useContext(Context);

  return (
    <SafeAreaView style={globalStyle.container}>
      <FlatList
        data={(list || []).sort(
          (a, b) => a.expirationTimestamp - b.expirationTimestamp,
        )}
        renderItem={({ item }) => <Item onClick={() => navigation.navigate("Detail", {id: item.id})} data={item} />}
        keyExtractor={(item) => item.id}
      />
      <Button
        onPress={() => navigation.navigate("Detail", {id: undefined })}
        title="Open Modal"
      />
    </SafeAreaView>
  );
};

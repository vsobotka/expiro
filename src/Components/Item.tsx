import {Text, View} from "react-native";
import {globalStyle} from "../Styles/Global";

type ItemProps = { title: string };

export const Item = ({title}: ItemProps) => (
  <View style={globalStyle.item}>
    <Text style={globalStyle.title}>{title}</Text>
  </View>
);

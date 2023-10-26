import {Text, View} from "react-native";
import {globalStyle} from "../Styles/Global";

type ItemProps = { title: string, expirationTimestamp: number };

export function Item({title, expirationTimestamp}: ItemProps) {
  const today = new Date();
  const daysLeft = Math.ceil((expirationTimestamp - today.getTime()) / (1000 * 3600 * 24));

  return <View style={globalStyle.item}>
    <Text style={globalStyle.title}>{title}</Text>
    <Text>{daysLeft}d</Text>
    <Text>{new Date(expirationTimestamp).toISOString()}</Text>
  </View>
}
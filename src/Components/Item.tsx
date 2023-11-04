import { Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../Styles/Global";
import { Badge } from "./Badge";
import { ItemType } from "../Storage/Data";

type ItemProps = { data: ItemType, onClick: () => void };

export function Item({ data, onClick }: ItemProps) {
  const today = new Date();
  const daysLeft = Math.ceil(
    (data.expirationTimestamp - today.getTime()) / (1000 * 3600 * 24),
  );

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={globalStyle.item}>
        <Badge daysLeft={daysLeft} />
        <Text style={globalStyle.title}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

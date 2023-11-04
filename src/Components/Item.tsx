import { Text, TouchableOpacity, View } from "react-native";
import { Badge } from "./Badge";
import { ItemType } from "../Storage/Data";
import * as Progress from "react-native-progress";
import { globalStyle } from "../Globals/Styles";

type ItemProps = { data: ItemType; onClick: () => void };

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
        {daysLeft >= 0 && daysLeft <= 20 && (
          <Progress.Bar progress={daysLeft / 20} width={200} />
        )}
      </View>
    </TouchableOpacity>
  );
}

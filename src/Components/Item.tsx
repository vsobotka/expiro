import { Text, TouchableOpacity, View } from "react-native";
import { Badge } from "./Badge";
import { ItemType } from "../Storage/Data";
import * as Progress from "react-native-progress";
import { globalStyle } from "../Globals/Styles";
import { thresholds } from "../Globals/Constants";

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
        {daysLeft >= thresholds.expired && daysLeft <= thresholds.soon && (
          <Progress.Bar progress={daysLeft / thresholds.soon} width={200} />
        )}
      </View>
    </TouchableOpacity>
  );
}

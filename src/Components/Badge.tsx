import { Text, View } from "react-native";
import { colors } from "../Globals/Constants";
import { globalStyle } from "../Globals/Styles";

type BadgeProps = { daysLeft: number };

export function Badge({ daysLeft }: BadgeProps) {
  const color =
    daysLeft < 0
      ? colors.badge.expired
      : daysLeft < 20
      ? colors.badge.soon
      : colors.badge.safe;

  return (
    <View style={{ ...globalStyle.badge, backgroundColor: color }}>
      <Text>{daysLeft}d</Text>
    </View>
  );
}

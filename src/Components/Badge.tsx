import { Text, View } from "react-native";
import { colors, thresholds } from "../Globals/Constants";
import { globalStyle } from "../Globals/Styles";

type BadgeProps = { daysLeft: number };

export function Badge({ daysLeft }: BadgeProps) {
  const color =
    daysLeft < thresholds.expired
      ? colors.badge.expired
      : daysLeft < thresholds.soon
      ? colors.badge.soon
      : colors.badge.safe;

  return (
    <View style={{ ...globalStyle.badge, backgroundColor: color }}>
      <Text>{daysLeft}d</Text>
    </View>
  );
}

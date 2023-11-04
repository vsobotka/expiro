import { Text, View } from "react-native";
import { colorTheme, thresholds } from "../Globals/Constants";
import { globalStyle } from "../Globals/Styles";

type BadgeProps = { daysLeft: number };

export function Badge({ daysLeft }: BadgeProps) {
  const color =
    daysLeft < thresholds.expired
      ? colorTheme.badge.expired
      : daysLeft < thresholds.soon
      ? colorTheme.badge.soon
      : colorTheme.badge.safe;

  return (
    <View style={{ ...globalStyle.badge, backgroundColor: color }}>
      <Text style={{ color: colorTheme.badge.badgeText }}>{daysLeft}d</Text>
    </View>
  );
}

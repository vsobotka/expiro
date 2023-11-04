import { Platform, TextInput } from "react-native";
import RNDateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React from "react";
import { globalStyle } from "../Globals/Styles";

type Props = {
  value: Date;
  onChange: (_: DateTimePickerEvent, newDate: Date | undefined) => any;
};

export function DatePicker({ value, onChange }: Props) {
  if (Platform.OS === "android") {
    return (
      <TextInput
        style={globalStyle.input}
        onPressIn={() =>
          DateTimePickerAndroid.open({
            value: value,
            onChange: onChange,
            mode: "date",
          })
        }
      >
        {value.toLocaleDateString()}
      </TextInput>
    );
  } else {
    return <RNDateTimePicker mode={"date"} value={value} onChange={onChange} />;
  }
}

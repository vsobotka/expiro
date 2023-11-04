import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
  },
  badge: {
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 18,
    alignSelf: "flex-start",
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
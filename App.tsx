import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { List } from "./src/Screens/List";
import { MyModal } from "./src/Screens/MyModal";

export type RootStackParamList = {
  List: undefined;
  MyModal: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="List" component={List} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="MyModal" component={MyModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

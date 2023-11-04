import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { List } from "./src/Screens/List";
import { ItemDetail } from "./src/Screens/ItemDetail";
import { StateProvider } from "./src/Context";

export type RootStackParamList = {
  List: undefined;
  Detail: { id: string | undefined };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name="List" component={List} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Detail" component={ItemDetail} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;

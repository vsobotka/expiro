import { SafeAreaView, FlatList } from "react-native";
import { globalStyle } from "./src/Styles/Global";
import React from "react";
import { Item } from "./src/Components/Item";
import { DATA } from "./src/Storage/Data";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={globalStyle.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

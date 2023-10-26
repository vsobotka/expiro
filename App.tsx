import {
  SafeAreaView,
  FlatList,
} from 'react-native';
import {globalStyle} from "./src/Styles/Global";
import React from "react";
import {Item} from "./src/Components/Item";
import {DATA} from "./src/Storage/Data";

const App = () => {
  return (
    <SafeAreaView style={globalStyle.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item {...item}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default App;

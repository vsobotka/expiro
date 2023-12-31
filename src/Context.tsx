import React, { PropsWithChildren, useEffect, useState } from "react";
import { DATA, ItemType } from "./Storage/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ListType = ItemType[];

export const Context = React.createContext({
  list: [] as ListType | null,
  addToList: (_: ItemType) => {},
  removeFromList: (_: ItemType) => {},
});

export function StateProvider({ children }: PropsWithChildren) {
  const [list, setList] = useState(null as ItemType[] | null);

  useEffect(() => {
    if (list === null) return;

    AsyncStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    AsyncStorage.getItem("list").then((value) => {
      const list = JSON.parse(value || "null");
      if (list) {
        setList(list);
      } else {
        setList(DATA);
      }
    });
  }, []);

  function addToList(item: ItemType) {
    const itemIndex = list?.findIndex((i) => i.id === item.id);
    const newList = [...(list || [])];
    if (itemIndex !== undefined && itemIndex !== -1) {
      newList[itemIndex] = item;
    } else {
      newList.push(item);
    }
    setList(newList);
  }

  function removeFromList(item: ItemType) {
    const itemIndex = list?.findIndex((i) => i.id === item.id);
    const newList = [...(list || [])];
    if (itemIndex !== undefined && itemIndex !== -1) {
      newList.splice(itemIndex, 1);
    }
    setList(newList);
  }

  return (
    <Context.Provider value={{ list, addToList, removeFromList }}>
      {children}
    </Context.Provider>
  );
}

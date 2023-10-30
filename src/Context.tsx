import React, { PropsWithChildren, useEffect, useState } from "react";
import { DATA } from "./Storage/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Item = {
  id: string;
  title: string;
  expirationTimestamp: number;
};

type ListType = Item[];

export const Context = React.createContext({
  list: [] as ListType | null,
  addToList: (_: Item) => {},
});

export function StateProvider({ children }: PropsWithChildren) {
  const [list, setList] = useState(null as typeof DATA | null);

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

  function addToList(item: (typeof DATA)[0]) {
    setList((list) => [...(list || []), item]);
  }

  return (
    <Context.Provider value={{ list, addToList }}>{children}</Context.Provider>
  );
}

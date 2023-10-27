import React, { PropsWithChildren, useState } from "react";
import { DATA } from "./Storage/Data";

type Item = {
  id: string;
  title: string;
  expirationTimestamp: number;
};

type ListType = Item[];

export const Context = React.createContext({
  list: [] as ListType,
  addToList: (item: Item) => {},
});

export function StateProvider({ children }: PropsWithChildren) {
  const [list, setList] = useState(DATA);

  function addToList(item: (typeof DATA)[0]) {
    setList((list) => [...list, item]);
  }

  return (
    <Context.Provider value={{ list, addToList }}>{children}</Context.Provider>
  );
}

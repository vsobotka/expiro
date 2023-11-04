export type ItemType = {
  id: string;
  title: string;
  expirationTimestamp: number;
}

export const DATA: ItemType[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    expirationTimestamp: 1636588800000,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    expirationTimestamp: 1699660800000,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    expirationTimestamp: 1731283200000,
  }
];

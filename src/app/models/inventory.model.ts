export enum RESOURCE {
  cash = 'Cash',
  water = 'Water',
  bean ='Coffee Bean',
  roastedBean = 'Roasted Bean',
  groundCoffee = 'Ground Coffee',
  coffee = 'Coffee',
};

export type Inventory = {
  [key in RESOURCE]: number;
}

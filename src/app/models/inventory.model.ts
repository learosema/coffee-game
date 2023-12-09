export interface Inventory {
  cash: number;
  water: number;
  bean: number;
  plants: number;
  roastedBeans: number;
  groundCoffee: number;
  coffee: number;

  [prop: string]: any;
}

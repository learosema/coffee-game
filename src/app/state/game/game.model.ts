import { FACILITY } from "../../models/facilities.model";
import { Inventory } from "../../models/inventory.model";

export interface GameModel {
  cycle: number;
  inventory: Inventory;
  facilities: Record<FACILITY, number>;
}

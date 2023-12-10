import { FACILITY } from "../../models/facilities.model";
import { GameModel } from "./game.model";
import { RESOURCE } from "../../models/inventory.model";

export const initialState: GameModel = {
  cycle: 1,
  inventory: {
    [RESOURCE.cash]: 100,
    [RESOURCE.water]: 1000,
    [RESOURCE.bean]: 0,
    [RESOURCE.roastedBean]: 0,
    [RESOURCE.groundCoffee]: 0,
    [RESOURCE.coffee]: 0,
  },
  facilities: {
    [FACILITY.plant]: 1,
    [FACILITY.roaster]: 1,
    [FACILITY.grinder]: 1,
    [FACILITY.brewer]: 1
  }
};


import { createReducer, on } from "@ngrx/store";
import { initialState } from "./game.initial-state";
import { gameActions } from "./game.actions";
import { RESOURCE } from "../../models/inventory.model";
import { FACILITY } from "../../models/facilities.model";
import { GameModel } from "./game.model";


const upgradeFacility = (state: GameModel, facility: string): GameModel => (
  {...state,
    inventory: {
      ...(state.inventory),
      [RESOURCE.cash]: state.inventory[RESOURCE.cash] - (state.inventory[RESOURCE.cash] >= 100 ? 100 : 0),
    },
    facilities: {
      ...(state.facilities),
      [facility]: state.facilities[facility as FACILITY] + (state.inventory[RESOURCE.cash] >= 100 ? 1 : 0)
    }
  }
);

const work = (state: GameModel, facility: string): GameModel => {
  const newState = structuredClone(state);
  switch (facility) {
    case FACILITY.plant: {
      break;
    }
    case FACILITY.roaster: {
      const count = Math.min(newState.inventory[RESOURCE.bean], newState.facilities[FACILITY.roaster]);
      newState.inventory[RESOURCE.bean] -= count;
      newState.inventory[RESOURCE.roastedBean] += count;
      break;
    }
    case FACILITY.grinder: {
      const count = Math.min(newState.inventory[RESOURCE.roastedBean], newState.facilities[FACILITY.roaster]);
      newState.inventory[RESOURCE.roastedBean] -= count;
      newState.inventory[RESOURCE.groundCoffee] += count;
      break;
    }
    case FACILITY.brewer: {
      const count = Math.min(
        newState.inventory[RESOURCE.groundCoffee],
        newState.inventory[RESOURCE.water],
        newState.facilities[FACILITY.brewer]
      );
      newState.inventory[RESOURCE.groundCoffee] -= count;
      newState.inventory[RESOURCE.water] -= count;
      newState.inventory[RESOURCE.coffee] += count * newState.facilities[FACILITY.brewer];
    }
  }
  return newState;
}


export const gameReducer = createReducer<GameModel>(initialState,
  on(gameActions.upgradeFacility, (state, payload) => upgradeFacility(state, payload.facility)),
  on(gameActions.work, (state, payload) => work(state, payload.facility)),
  on(gameActions.nextCycle, (state) => {
    const newState = structuredClone(state);
    newState.cycle += 1;
    if (newState.cycle % 4 === 0) {
      newState.inventory[RESOURCE.bean] += newState.facilities[FACILITY.plant];
    }
    return newState;
  }),
  on(gameActions.sellCoffee, (state: GameModel) => {
    const newState = structuredClone(state);
    newState.inventory[RESOURCE.cash] += newState.inventory[RESOURCE.coffee] * 5;
    newState.inventory[RESOURCE.coffee] = 0;
    return newState;
  })
);

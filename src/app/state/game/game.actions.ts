import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { FACILITY } from "../../models/facilities.model";

export const gameActions = createActionGroup({
  source: 'Game',
  events: {
    upgradeFacility: props<{facility: string}>(),
    work: props<{facility: string}>(),
    sellCoffee: emptyProps(),
    nextCycle: emptyProps(),
  }
});

import { createActionGroup, emptyProps, props } from "@ngrx/store";

const gameActions = createActionGroup({
  source: 'Game',
  events: {
    'Buy Plant': emptyProps(),
    'Roast Bean': emptyProps(),
    'Grind Coffee': emptyProps(),
    'Brew Coffee': emptyProps(),
    'Next Cycle': emptyProps(),
  }
});

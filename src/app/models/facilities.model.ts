import { RESOURCE } from "./inventory.model"

export enum FACILITY {
  plant = 'Coffee Plant',
  roaster = 'Coffee Roaster',
  grinder = 'Coffee Grinder',
  brewer = 'Coffee Brewer'
};

export type FacilityDetail = {
  produces: RESOURCE[],
  consumes: RESOURCE[],
  cycle: number,
  lastCycle: number
}

export const FACILITY_DETAILS: Record<FACILITY, FacilityDetail> = {
  [FACILITY.plant]: {
    produces: [RESOURCE.bean],
    consumes: [RESOURCE.water],
    cycle: 1,
    lastCycle: 1,
  },
  [FACILITY.roaster]: {
    produces: [RESOURCE.roastedBean],
    consumes: [RESOURCE.bean],
    cycle: 6,
    lastCycle: NaN
  },
  [FACILITY.grinder]: {
    produces: [RESOURCE.groundCoffee],
    consumes: [RESOURCE.roastedBean],
    cycle: 7,
    lastCycle: NaN
  },
  [FACILITY.brewer]: {
    produces: [RESOURCE.coffee],
    consumes: [],
    cycle: 3,
    lastCycle: NaN
  }
}

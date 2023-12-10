import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GameModel } from './game.model';

export const selectGame = createFeatureSelector<GameModel>('game');

export const selectResources = createSelector(
  selectGame,
  (state: GameModel) => state.inventory
);

export const selectCycle = createSelector(
  selectGame,
  (state: GameModel) => state.cycle
);

export const selectFacilities = createSelector(
  selectGame,
  (state: GameModel) => state.facilities
);

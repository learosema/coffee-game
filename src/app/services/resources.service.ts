import { Injectable } from '@angular/core';
import { GameResource } from '../models/game-resource';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }

  protected resources: Record<string, string> = {
    cash: 'Cash',
    water: 'Water',
    bean: 'Coffee Bean',
    roastedBean: 'Roasted Bean',
    groundCoffee: 'Ground Coffee',
    coffee: 'Coffee',
  };

  getById(id: string): GameResource|null {
    const name = this.resources[id];
    return name ? {id, name} : null;
  }
}

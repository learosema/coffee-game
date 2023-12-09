import { Injectable } from '@angular/core';
import { GameResource } from '../models/game-resource';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }

  protected resources: GameResource[] = [
    {
      id: 'plant', name: 'Coffee Plant', produces: ['bean'], interval: 10
    }, {
      id: 'bean', name: 'Coffee Bean'
    }, {
      id: 'roasted_bean', name: 'Coffee Bean (roasted)'
    }, {
      id: 'ground_coffee', name: 'Ground Coffee'
    }, {
      id: 'roaster', name: 'Coffee Roaster', consumes: ['bean'], produces: ['roasted_bean']
    }, {
      id: 'mill', name: 'Coffee Mill', consumes: ['roasted_bean'], produces: ['ground_coffee'],
    },
    {
      id: 'cooker', name: 'Coffee Cooker', consumes: ['water', 'ground_coffee'], produces: ['unfiltered_coffee']
    },
  ]
}

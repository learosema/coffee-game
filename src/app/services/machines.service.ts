import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  protected machines = {
    'plant': {
      name: 'Coffee Plant',
      consumes: ['water'],
      produces: ['bean'],
    },
    'roaster': {
      name: 'Coffee Roaster',
      consumes: ['bean'],
      produces: ['roasted_bean'],
    },
    'mill': {
      id: 'mill',
      name: 'Coffee Mill',
      consumes: ['roasted_bean'],
      produces: ['ground_coffee'],
    },
    'cooker': {
      id: 'cooker',
      name: 'Coffee Cooker',
      consumes: ['water', 'ground_coffee'],
      produces: ['unfiltered_coffee']
    }
  }

  constructor() { }
}

export interface GameResource {
  id: string;
  name: string;
  produces?: string[];
  consumes?: string[];
  interval?: number;
}


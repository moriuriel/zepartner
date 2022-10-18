export type Position = number[];

export enum AreaTypeEnum {
  MultiPolygon = 'MultiPolygon',
  Point = 'Point',
}

export class Location {
  constructor(public type: string, public readonly coordinates: Position) {
    this.type = AreaTypeEnum[type];
  }
}

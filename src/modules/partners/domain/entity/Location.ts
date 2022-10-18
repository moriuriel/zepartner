export type Position = number[]; // [number, number] | [number, number, number];

export enum AreaTypeEnum {
  MultiPolygon = 'MultiPolygon',
  Point = 'Point',
}

export class Location {
  constructor(public type: string, public readonly coordinates: Position) {
    this.type = AreaTypeEnum[type];
  }
}

export class CoverageArea {
  constructor(
    public type: string,
    public readonly coordinates: Position[][][],
  ) {
    this.type = AreaTypeEnum[type];
  }
}

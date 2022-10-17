export class Postion {
  lat: number;
  lng: number;
}

export enum AreaTypeEnum {
  MultiPolygon = 'MultiPolygon',
  Point = 'Point',
}

export type CoordinatesType = Postion[] | Postion[][][];

export class Location {
  constructor(
    public type: string,
    public readonly coordinates: CoordinatesType,
  ) {
    this.type = AreaTypeEnum[type];
  }
}

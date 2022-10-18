import { AreaTypeEnum, Position } from './Location';

export class CoverageArea {
  constructor(
    public type: string,
    public readonly coordinates: Position[][][],
  ) {
    this.type = AreaTypeEnum[type];
  }
}

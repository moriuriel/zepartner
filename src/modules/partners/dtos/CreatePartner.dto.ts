import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

class Postion {
  lat: number;
  lng: number;
}

export enum AreaTypeEnum {
  MultiPolygon = 'MultiPolygon',
  Point = 'Point',
}

export class AddressPartnerDto {
  @IsNotEmpty()
  @IsEnum(AreaTypeEnum)
  type: AreaTypeEnum;
  @IsArray()
  @ArrayNotEmpty()
  coordinates: Postion[];
}

export class CoverageAreaPartnerDto {
  @IsNotEmpty()
  @IsEnum(AreaTypeEnum)
  type: AreaTypeEnum;
  @IsArray()
  @ArrayNotEmpty()
  coordinates: Postion[][][];
}

export class CreatePartnerDto {
  @IsString()
  @IsNotEmpty()
  tradingName: string;
  @IsString()
  @IsNotEmpty()
  ownerName: string;
  @IsString()
  @IsNotEmpty()
  document: string;
  @ValidateNested()
  @Type(() => AddressPartnerDto)
  address: AddressPartnerDto;
  @ValidateNested()
  @Type(() => CoverageAreaPartnerDto)
  coverageArea: CoverageAreaPartnerDto;
}

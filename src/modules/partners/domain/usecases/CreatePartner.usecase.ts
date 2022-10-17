import { Partner } from '../../infrastructure/schemas/Partner.schema';

class Postion {
  lat: number;
  lng: number;
}

export enum AreaTypeEnum {
  MultiPolygon = 'MultiPolygon',
  Point = 'Point',
}

export interface AddressPartner {
  type: string;
  coordinates: Postion[];
}

export interface CoverageAreaPartner {
  type: string;
  coordinates: Postion[][][];
}

export interface ICreatePartnerInput {
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: CoverageAreaPartner;
  address: AddressPartner;
}

export type ICreatePartnerOutput = Partner;

export interface ICreatePartnerUsecase {
  execute(partner: ICreatePartnerInput): Promise<ICreatePartnerOutput>;
}

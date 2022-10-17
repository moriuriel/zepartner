import { CoordinatesType } from '../entity/Location';

export interface AddressPartner {
  type: string;
  coordinates: CoordinatesType;
}

export interface CoverageAreaPartner {
  type: string;
  coordinates: CoordinatesType;
}

export interface ICreatePartnerInput {
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: CoverageAreaPartner;
  address: AddressPartner;
}

export interface ICreatePartnerOutput {
  _id: string;
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: CoverageAreaPartner;
  address: AddressPartner;
}

export interface ICreatePartnerUsecase {
  execute(partner: ICreatePartnerInput): Promise<ICreatePartnerOutput>;
}

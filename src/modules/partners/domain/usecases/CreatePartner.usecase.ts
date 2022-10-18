import { Position } from '../entity';

export interface AddressPartner {
  type: string;
  coordinates: Position;
}

export interface CoverageAreaPartner {
  type: string;
  coordinates: Position[][][];
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

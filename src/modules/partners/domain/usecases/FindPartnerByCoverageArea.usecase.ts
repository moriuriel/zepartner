import { AddressPartner, CoverageAreaPartner } from './CreatePartner.usecase';

export interface IPartnerOutput {
  _id: string;
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: CoverageAreaPartner;
  address: AddressPartner;
}
export interface IFindPartnerByCoverageAInput {
  lat: number;
  lng: number;
}

export interface IFindPartnerByCoverageAreaUsecase {
  execute(input: IFindPartnerByCoverageAInput): Promise<IPartnerOutput[]>;
}

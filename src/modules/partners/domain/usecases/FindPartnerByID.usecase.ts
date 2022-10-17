import { AddressPartner, CoverageAreaPartner } from './CreatePartner.usecase';

export interface IPartnerOutput {
  _id: string;
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: CoverageAreaPartner;
  address: AddressPartner;
}

export interface IFindPartnerByIDUsecase {
  execute(id: string): Promise<IPartnerOutput>;
}

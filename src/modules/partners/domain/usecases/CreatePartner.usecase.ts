type Postion = [lat: number, lng: number];

export enum AreaTypeEnum {
  MultiPolygon = 'MultiPolygon',
  Point = 'Point',
}

export interface AddressPartnerDto {
  type: AreaTypeEnum;
  coordinates: Postion;
}

export interface ICreatePartnerInput {
  tradingName: string;
  ownerName: string;
  document: string;
  address: AddressPartnerDto;
}

export interface ICreatePartnerOutput {
  _id: string;
  tradingName: string;
  ownerName: string;
  document: string;
  address: AddressPartnerDto;
  _v: number;
  createdAt: string;
}

export interface ICreatePartnerUsecase {
  execute(partner: ICreatePartnerInput): Promise<ICreatePartnerOutput>;
}

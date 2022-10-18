import { Partner } from '../../infrastructure/schemas/Partner.schema';
import { ICreatePartnerInput } from '../usecases';

export interface IPartnerRepository {
  create(partner: ICreatePartnerInput): Promise<Partner>;
  findById(id: string): Promise<Partner>;
  findByDocument(document: string): Promise<Partner>;
  findByLocation(lat: number, lng: number): Promise<Partner[]>;
}

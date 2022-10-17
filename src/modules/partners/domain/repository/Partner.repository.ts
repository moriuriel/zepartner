import { Partner } from '../../infrastructure/schemas/Partner.schema';
import { ICreatePartnerInput } from '../usecases';

export interface IPartnerRepository {
  create(partner: ICreatePartnerInput): Promise<Partner>;
  findById(id: string): Promise<Partner>;
}

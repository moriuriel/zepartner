import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPartnerRepository } from '../../domain/repository/Partner.repository';
import { ICreatePartnerInput } from '../../domain/usecases';
import { Partner } from '../schemas/Partner.schema';

@Injectable()
export class PartnerMongodbRepository implements IPartnerRepository {
  constructor(@InjectModel(Partner.name) private repository: Model<Partner>) {}

  async create(partner: ICreatePartnerInput): Promise<Partner> {
    return this.repository.create(partner);
  }

  async findById(id: string): Promise<Partner> {
    return this.repository.findById(id);
  }

  async findByDocument(document: string): Promise<Partner> {
    return this.repository.findOne({ document });
  }
}

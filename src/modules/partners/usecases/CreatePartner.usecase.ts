import { Injectable } from '@nestjs/common';
import {
  ICreatePartnerInput,
  ICreatePartnerOutput,
  ICreatePartnerUsecase,
} from '../domain/usecases';

@Injectable()
export class CreatePartnerUseCase implements ICreatePartnerUsecase {
  async execute(partner: ICreatePartnerInput): Promise<ICreatePartnerOutput> {
    return {
      ...partner,
      _id: 'valid_id',
      createdAt: new Date(Date.now()).toISOString(),
      _v: 1,
    };
  }
}

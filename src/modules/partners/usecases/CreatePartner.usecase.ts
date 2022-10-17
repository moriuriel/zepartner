import { Inject, Injectable } from '@nestjs/common';
import { IPartnerRepository } from '../domain/repository/Partner.repository';
import {
  AreaTypeEnum,
  ICreatePartnerInput,
  ICreatePartnerOutput,
  ICreatePartnerUsecase,
} from '../domain/usecases';
import { PartnerMongodbRepository } from '../infrastructure/repository';

@Injectable()
export class CreatePartnerUseCase implements ICreatePartnerUsecase {
  constructor(
    @Inject(PartnerMongodbRepository)
    private readonly repo: IPartnerRepository,
  ) {}

  async execute(input: ICreatePartnerInput): Promise<ICreatePartnerOutput> {
    const addressType = AreaTypeEnum[input.address.type];

    const partner = await this.repo.create({
      document: input.document,
      ownerName: input.ownerName,
      tradingName: input.tradingName,
      address: {
        coordinates: input.address.coordinates,
        type: String(addressType),
      },
    });

    return partner;
  }
}

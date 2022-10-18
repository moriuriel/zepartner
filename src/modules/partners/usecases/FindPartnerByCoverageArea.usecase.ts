import { Inject, Injectable } from '@nestjs/common';
import { IPartnerRepository } from '../domain/repository/Partner.repository';
import {
  IFindPartnerByCoverageAInput,
  IFindPartnerByCoverageAreaUsecase,
  IPartnerOutput,
} from '../domain/usecases/FindPartnerByCoverageArea.usecase';
import { PartnerMongodbRepository } from '../infrastructure/repository';

@Injectable()
export class FindPartnerByCoverageAreaUsecase
  implements IFindPartnerByCoverageAreaUsecase
{
  constructor(
    @Inject(PartnerMongodbRepository)
    private readonly repo: IPartnerRepository,
  ) {}

  async execute(
    input: IFindPartnerByCoverageAInput,
  ): Promise<IPartnerOutput[]> {
    const partner = await this.repo.findByLocation(input.lat, input.lng);

    return partner;
  }
}

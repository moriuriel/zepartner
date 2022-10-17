import { Inject, Injectable } from '@nestjs/common';
import { IPartnerRepository } from '../domain/repository/Partner.repository';
import { IFindPartnerByIDUsecase, IPartnerOutput } from '../domain/usecases';
import { PartnerMongodbRepository } from '../infrastructure/repository';

@Injectable()
export class FindPartnerByIDUsecase implements IFindPartnerByIDUsecase {
  constructor(
    @Inject(PartnerMongodbRepository)
    private readonly repo: IPartnerRepository,
  ) {}

  async execute(id: string): Promise<IPartnerOutput> {
    const partner = await this.repo.findById(id);

    return partner;
  }
}

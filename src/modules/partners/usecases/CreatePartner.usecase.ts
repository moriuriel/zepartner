import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Location } from '../domain/entity/Location';
import { Partner } from '../domain/entity/Partner';
import { IPartnerRepository } from '../domain/repository/Partner.repository';
import {
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
    const newPartner = new Partner(
      input.document,
      input.ownerName,
      input.tradingName,
    );

    const isDocumentInUse = await this.repo.findByDocument(newPartner.document);

    if (isDocumentInUse) {
      throw new UnprocessableEntityException('Document in use');
    }

    const address = new Location(input.address.type, input.address.coordinates);
    const coverageArea = new Location(
      input.coverageArea.type,
      input.coverageArea.coordinates,
    );

    const partner = await this.repo.create({
      ...newPartner,
      address: {
        ...address,
      },
      coverageArea: { ...coverageArea },
    });

    return partner;
  }
}

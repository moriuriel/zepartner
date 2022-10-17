import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartnersController } from './controllers';
import { PartnerMongodbRepository } from './infrastructure/repository';
import {
  Partner,
  PartnerSchema,
} from './infrastructure/schemas/Partner.schema';
import { CreatePartnerUseCase, FindPartnerByIDUsecase } from './usecases';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Partner.name, schema: PartnerSchema }]),
  ],
  controllers: [PartnersController],
  providers: [
    PartnerMongodbRepository,
    CreatePartnerUseCase,
    FindPartnerByIDUsecase,
  ],
})
export class PartnersModule {}

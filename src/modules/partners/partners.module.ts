import { Module } from '@nestjs/common';
import { PartnersController } from './controllers';
import { CreatePartnerUseCase } from './usecases';

@Module({
  controllers: [PartnersController],
  providers: [CreatePartnerUseCase],
})
export class PartnersModule {}

import { Module } from '@nestjs/common';
import { PartnersController } from './controllers';

@Module({ controllers: [PartnersController] })
export class PartnersModule {}

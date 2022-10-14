import { Module } from '@nestjs/common';
import { PartnersModule } from './modules/partners/partners.module';

@Module({
  imports: [PartnersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

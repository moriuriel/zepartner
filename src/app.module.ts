import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PartnersModule } from './modules/partners/partners.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PartnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

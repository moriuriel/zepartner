import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoDBModule } from './infrastrucutre/database/mongodb';
import { PartnersModule } from './modules/partners/partners.module';

@Module({
  imports: [
    MongoDBModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PartnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

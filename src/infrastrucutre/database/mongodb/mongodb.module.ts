import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from '../../../config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${env().database.user}:${env().database.user}@${
          env().database.host
        }:${env().database.port}`,
        dbName: env().database.name,
      }),
    }),
  ],
})
export class MongoDBModule {}

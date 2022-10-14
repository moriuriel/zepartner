import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appPort = env().port;

  app.setGlobalPrefix('/api/v1');

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(appPort);
}
bootstrap();

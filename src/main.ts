import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT);
  logger.log(`App running on port ${ process.env.PORT }`);
  logger.log(`App global prefix is ${ process.env.HOST_API }`);
}

bootstrap();
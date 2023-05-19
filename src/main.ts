import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  
  app.setGlobalPrefix('api');
  app.use(cors());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  await app.listen(process.env.PORT);
  logger.log(`App running on port ${ process.env.PORT }`);
  logger.log(`App global prefix is ${ process.env.HOST_API }`);
}

bootstrap();
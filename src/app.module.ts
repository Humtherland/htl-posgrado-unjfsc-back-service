import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { AuthModule } from './auth/auth.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';

@Module({
  imports: [
    AuthModule,
    BootstrapModule,
    ConfigModule.forRoot(),
    PersonsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: Boolean(process.env.DB_LOAD),
      synchronize: Boolean(process.env.DB_SYNC),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

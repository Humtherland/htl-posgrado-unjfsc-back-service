import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Publication } from './entities/publication.entity';

@Module({
  controllers: [PublicationsController],
  providers: [PublicationsService],
  imports: [
    TypeOrmModule.forFeature([
      Publication,
    ]),
    AuthModule
  ],
  exports: [
    PublicationsService,
    TypeOrmModule,
  ]
})
export class PublicationsModule {}

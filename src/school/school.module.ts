import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService],
  imports: [
    TypeOrmModule.forFeature([
      School,
    ]),
    AuthModule
  ],
  exports: [
    SchoolService,
    TypeOrmModule,
  ]
})
export class SchoolModule {}

import { Module } from '@nestjs/common';
import { RequiredFilesService } from './required_files.service';
import { RequiredFilesController } from './required_files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequiredFile } from './entities/required_file.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RequiredFilesController],
  providers: [RequiredFilesService],
  imports: [
    TypeOrmModule.forFeature([
      RequiredFile,
    ]),
    AuthModule
  ],
  exports: [
    RequiredFilesService,
    TypeOrmModule,
  ]
})
export class RequiredFilesModule {}

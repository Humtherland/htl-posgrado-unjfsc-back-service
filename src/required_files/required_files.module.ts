import { Module } from '@nestjs/common';
import { RequiredFilesService } from './required_files.service';
import { RequiredFilesController } from './required_files.controller';

@Module({
  controllers: [RequiredFilesController],
  providers: [RequiredFilesService]
})
export class RequiredFilesModule {}

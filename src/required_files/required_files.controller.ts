import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequiredFilesService } from './required_files.service';
import { CreateRequiredFileDto } from './dto/create-required_file.dto';
import { UpdateRequiredFileDto } from './dto/update-required_file.dto';

@Controller('required-files')
export class RequiredFilesController {
  constructor(private readonly requiredFilesService: RequiredFilesService) {}

  @Post()
  create(@Body() createRequiredFileDto: CreateRequiredFileDto) {
    return this.requiredFilesService.create(createRequiredFileDto);
  }

  @Get()
  findAll() {
    return this.requiredFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requiredFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequiredFileDto: UpdateRequiredFileDto) {
    return this.requiredFilesService.update(+id, updateRequiredFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requiredFilesService.remove(+id);
  }
}

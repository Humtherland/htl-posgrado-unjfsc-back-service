import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudyModalityService } from './study_modality.service';
import { CreateStudyModalityDto } from './dto/create-study_modality.dto';
import { UpdateStudyModalityDto } from './dto/update-study_modality.dto';

@Controller('study-modality')
export class StudyModalityController {
  constructor(private readonly studyModalityService: StudyModalityService) {}

  @Post()
  create(@Body() createStudyModalityDto: CreateStudyModalityDto) {
    return this.studyModalityService.create(createStudyModalityDto);
  }

  @Get()
  findAll() {
    return this.studyModalityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studyModalityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudyModalityDto: UpdateStudyModalityDto) {
    return this.studyModalityService.update(+id, updateStudyModalityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studyModalityService.remove(+id);
  }
}

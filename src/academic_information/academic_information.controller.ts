import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademicInformationService } from './academic_information.service';
import { CreateAcademicInformationDto } from './dto/create-academic_information.dto';
import { UpdateAcademicInformationDto } from './dto/update-academic_information.dto';

@Controller('academic-information')
export class AcademicInformationController {
  constructor(private readonly academicInformationService: AcademicInformationService) {}

  @Post()
  create(@Body() createAcademicInformationDto: CreateAcademicInformationDto) {
    return this.academicInformationService.create(createAcademicInformationDto);
  }

  @Get()
  findAll() {
    return this.academicInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicInformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademicInformationDto: UpdateAcademicInformationDto) {
    return this.academicInformationService.update(+id, updateAcademicInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicInformationService.remove(+id);
  }
}

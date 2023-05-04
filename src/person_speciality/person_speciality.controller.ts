import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonSpecialityService } from './person_speciality.service';
import { CreatePersonSpecialityDto } from './dto/create-person_speciality.dto';
import { UpdatePersonSpecialityDto } from './dto/update-person_speciality.dto';

@Controller('person-speciality')
export class PersonSpecialityController {
  constructor(private readonly personSpecialityService: PersonSpecialityService) {}

  @Post()
  create(@Body() createPersonSpecialityDto: CreatePersonSpecialityDto) {
    return this.personSpecialityService.create(createPersonSpecialityDto);
  }

  @Get()
  findAll() {
    return this.personSpecialityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personSpecialityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonSpecialityDto: UpdatePersonSpecialityDto) {
    return this.personSpecialityService.update(+id, updatePersonSpecialityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personSpecialityService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Auth } from '../auth/decorators';
import { ValidScopes } from '../auth/interfaces';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personsService.create(createPersonDto);
  }

  @Get()
  @Auth(
    ValidScopes.PERSONS_READ, 
    ValidScopes.PERSONS_SUDO
    )
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.personsService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.personsService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personsService.update(id, updatePersonDto);
  }
  
}

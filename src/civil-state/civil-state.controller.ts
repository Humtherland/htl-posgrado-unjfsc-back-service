import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CivilStateService } from './civil-state.service';
import { CreateCivilStateDto } from './dto/create-civil-state.dto';
import { UpdateCivilStateDto } from './dto/update-civil-state.dto';

@Controller('civil-state')
export class CivilStateController {
  constructor(private readonly civilStateService: CivilStateService) {}

  @Post()
  create(@Body() createCivilStateDto: CreateCivilStateDto) {
    return this.civilStateService.create(createCivilStateDto);
  }

  @Get()
  findAll() {
    return this.civilStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.civilStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCivilStateDto: UpdateCivilStateDto) {
    return this.civilStateService.update(+id, updateCivilStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.civilStateService.remove(+id);
  }
}

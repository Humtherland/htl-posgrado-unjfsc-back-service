import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestApplyService } from './request_apply.service';
import { CreateRequestApplyDto } from './dto/create-request_apply.dto';
import { UpdateRequestApplyDto } from './dto/update-request_apply.dto';

@Controller('request-apply')
export class RequestApplyController {
  constructor(private readonly requestApplyService: RequestApplyService) {}

  @Post()
  create(@Body() createRequestApplyDto: CreateRequestApplyDto) {
    return this.requestApplyService.create(createRequestApplyDto);
  }

  @Get()
  findAll() {
    return this.requestApplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestApplyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestApplyDto: UpdateRequestApplyDto) {
    return this.requestApplyService.update(+id, updateRequestApplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestApplyService.remove(+id);
  }
}

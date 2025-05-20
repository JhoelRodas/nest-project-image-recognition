import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttentionHourService } from './attention-hour.service';
import { AddAttHourUser, CreateAttentionHourDto } from './dto/create-attention-hour.dto';
import { UpdateAttentionHourDto } from './dto/update-attention-hour.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('attention-hour')
export class AttentionHourController {
  constructor(private readonly attentionHourService: AttentionHourService) {}

  @Post()
  @ApiBody({type:CreateAttentionHourDto})
  create(@Body() createAttentionHourDto: CreateAttentionHourDto) {
    return this.attentionHourService.create(createAttentionHourDto);
  }

  @Post('attHourUser')
  @ApiBody({type:CreateAttentionHourDto})
  addAttHourUser(@Body() addAttHourUser: AddAttHourUser) {
    return this.attentionHourService.addAttentionHourUser(addAttHourUser);
  }

  @Delete('attHourUser')
  @ApiBody({type:CreateAttentionHourDto})
  removeAttHourUser(@Body() addAttHourUser: AddAttHourUser) {
    return this.attentionHourService.removeAttentionHourUser(addAttHourUser);
  }


  @Get()
  findAll() {
    return this.attentionHourService.findAll();
  }

  @Get('organization/:id')
  @ApiParam({name:"id",description:"id de la organizacion"})
  findAllByOrganization(@Param('id') id:string){
    return this.attentionHourService.findAllByOrganization(id)
  }

  @Get(':id')
  @ApiParam({name:"id",description:"id del horario de atencion"})
  findOne(@Param('id') id: string) {
    return this.attentionHourService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttentionHourDto: UpdateAttentionHourDto) {
    return this.attentionHourService.update(id, updateAttentionHourDto);
  }

  @Delete(':id')
  @ApiParam({name:"id",description:"id del horario de atencion"})
  remove(@Param('id') id: string) {
    return this.attentionHourService.remove(id);
  }
}

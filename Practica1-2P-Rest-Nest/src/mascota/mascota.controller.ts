import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota } from './entities/mascota.entity';

@Controller('estudiante')
export class MascotaController {
  constructor(private readonly MascotaService: MascotaService) {}

  @Post()
  create(@Body() createEstudianteDto: CreateMascotaDto) {
    return this.MascotaService.create(createEstudianteDto);
  }

  @Get()
  findAll() : Mascota[] {
    return this.MascotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.MascotaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateMascotaDto) {
    return this.MascotaService.update(+id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MascotaService.remove(+id);
  }
}

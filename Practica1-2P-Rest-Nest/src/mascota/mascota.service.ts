import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota } from './entities/mascota.entity';

@Injectable()
export class MascotaService {

  private mascota: Mascota[]=[
    {id:1, dueno:'1', nombre: 'Ayme' },
    {id:2, dueno:'2', nombre: 'Evelyn' },
  ]

  create(CreateMascotaDto: CreateMascotaDto) {
    const mascota = new Mascota();
    mascota.id=  Math.max( ... this.mascota.map(elemento => elemento.id),0 )+1 ;
    mascota.dueno= CreateMascotaDto.dueno;
    mascota.nombre= CreateMascotaDto.nombre;
    this.mascota.push(mascota);
    return mascota;
  }

  findAll() : Mascota[] {
    return this.mascota;
  }

  findOne(id: number) {
    //const mascota =  this.mascota.find(this.mascota => this.mascota.id===id);
    const mascota =  this.mascota.find(mascota => mascota.id===id);
    if (!mascota) throw new NotFoundException(`ID ${id} not found`)
    return mascota;
  }

  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    const { dueno  } = updateMascotaDto;
    const { nombre  } = updateMascotaDto;
    const mascota = this.findOne(id);
    if (dueno) mascota.dueno= dueno;
    

    this.mascota =  this.mascota.map( elemento=> {
      if (elemento.id===id) return mascota;
      return elemento;
    } )

    return mascota;

  }

  remove(id: number) {
    this.findOne(id);
    this.mascota =  this.mascota.filter(elemento=> elemento.id!== id);
  }
}

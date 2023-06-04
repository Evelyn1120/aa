import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota } from './entities/mascota.entity';
export declare class MascotaService {
    private mascota;
    create(CreateMascotaDto: CreateMascotaDto): Mascota;
    findAll(): Mascota[];
    findOne(id: number): Mascota;
    update(id: number, updateMascotaDto: UpdateMascotaDto): Mascota;
    remove(id: number): void;
}

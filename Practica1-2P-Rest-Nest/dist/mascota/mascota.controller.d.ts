import { MascotaService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota } from './entities/mascota.entity';
export declare class MascotaController {
    private readonly MascotaService;
    constructor(MascotaService: MascotaService);
    create(createEstudianteDto: CreateMascotaDto): Mascota;
    findAll(): Mascota[];
    findOne(id: number): Mascota;
    update(id: string, updateEstudianteDto: UpdateMascotaDto): Mascota;
    remove(id: string): void;
}

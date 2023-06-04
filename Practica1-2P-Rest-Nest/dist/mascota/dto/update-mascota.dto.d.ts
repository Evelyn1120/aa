import { CreateMascotaDto } from './create-mascota.dto';
declare const UpdateMascotaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMascotaDto>>;
export declare class UpdateMascotaDto extends UpdateMascotaDto_base {
    estado?: boolean;
}
export {};

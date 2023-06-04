import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMascotaDto {
    @IsString()
    @IsNotEmpty()
    dueno:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;

    
}

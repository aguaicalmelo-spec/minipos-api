import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePanCocoDto {

    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    descripcion: string;


    @IsOptional()
    precio: string;
} 
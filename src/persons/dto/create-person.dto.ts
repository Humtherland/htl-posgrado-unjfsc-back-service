import { IsIn, IsNumber, IsString, MaxLength, MinLength 
} from 'class-validator';
import { CivilState } from 'src/civil-state/entities/civil-state.entity';

export class CreatePersonDto {
    @IsString()
    @MaxLength(11)
    @MinLength(8)
    dni: string;

    @IsString()
    name: string;

    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    birthday: string;

    @IsIn(['masculino','femenino','nobinario'])
    gender: string;

    @IsString()
    cell_phone_number: string;

    @IsString()
    email: string;

    @IsString()
    department: string;

    @IsString()
    province: string;

    @IsString()
    district: string;

    @IsString()
    address: string;

    @IsNumber()
    id_civil_status: number;
}

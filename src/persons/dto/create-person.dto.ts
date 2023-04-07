import { IsIn, IsString, MaxLength, MinLength 
} from 'class-validator';

export class CreatePersonDto {
    
    @IsString()
    @MaxLength(11)
    @MinLength(8)
    dni: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    birthday: string;

    @IsIn(['masculino','femenino','nobinario'])
    gender: string;

    @IsIn(['soltero','casado','divorciado','viudo'])
    civilState: string;

    @IsString()
    zipCode: string;

    @IsString()
    address: string;

    @IsString()
    email: string;

}

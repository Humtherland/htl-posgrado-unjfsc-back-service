import { IsArray, IsObject, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Person } from 'src/persons/entities/person.entity';


export class CreateUserDto {

    @IsString()
    username: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsObject()
    id_person: Person;

    @IsArray()
    scopes: string[];

}
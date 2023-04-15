import { IsString, IsUUID, Matches, MaxLength, MinLength } from 'class-validator';


export class CreatePostulatorUserDto {

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

    @IsUUID()
    personId: string;

}
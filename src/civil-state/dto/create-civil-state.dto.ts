import { IsNotEmpty } from "class-validator";

export class CreateCivilStateDto {
	@IsNotEmpty()
	name: string;
}

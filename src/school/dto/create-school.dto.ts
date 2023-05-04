import { IsNotEmpty } from "class-validator";
import { Degree } from "src/degree/entities/degree.entity";

export class CreateSchoolDto {
	@IsNotEmpty()
	name: string;
	
	@IsNotEmpty()
	id_degree: number;
}

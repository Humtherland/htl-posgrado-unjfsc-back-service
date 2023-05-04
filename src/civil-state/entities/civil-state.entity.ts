import { Person } from "src/persons/entities/person.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'civil-state' })
export class CivilState {
	@PrimaryGeneratedColumn('increment')
  id: number;
	
	@Column({
		type: 'text',
	})
	name: string;

	@OneToOne((type) => Person, (person) => person.id_civil_status )
	person: Person;

	@CreateDateColumn()
	at_create: Date;

	@UpdateDateColumn()
	at_update: Date;

	@DeleteDateColumn()
	at_delete: Date;
}

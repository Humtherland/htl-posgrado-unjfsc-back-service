import { Person } from "src/persons/entities/person.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'role' })
export class Role {
	@PrimaryGeneratedColumn('increment')
  id: number;

	@Column({
		type: 'text',
	})
	name: string;

	@OneToOne((type) => Person, (person) => person.id_role )
	person: Person;

	@Column('text', {
		array: true,
		default: ['user']
	})
	scopes: string[];

	@CreateDateColumn()
	at_create: Date;

	@UpdateDateColumn()
	at_update: Date;

	@DeleteDateColumn()
	at_delete: Date;
}


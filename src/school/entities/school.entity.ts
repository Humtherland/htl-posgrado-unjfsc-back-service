import { Degree } from "src/degree/entities/degree.entity";
import { Specialty } from "src/specialty/entities/specialty.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'school' })
export class School {
	@PrimaryGeneratedColumn('increment')
  id: number;

	@Column({
		type: 'text',
	})
	name: string;

	@ManyToOne((type:any) => Degree, (degree) => degree.id, {cascade:true, nullable: false} )
	@JoinColumn({ name: 'id_degree' })
  id_degree: number;

	@OneToMany((type) => Specialty, (specialty) => specialty.id_school )
	school: Specialty;

	@CreateDateColumn()
	at_create: Date;

	@UpdateDateColumn()
	at_update: Date;

	@DeleteDateColumn()
	at_delete: Date;
}

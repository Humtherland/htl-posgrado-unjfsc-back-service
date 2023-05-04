import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'degree' })
export class Degree {
	@PrimaryGeneratedColumn('increment')
  id: number;

	@Column({
		type: 'text',
	})
	name: string;

	@CreateDateColumn()
	at_create: Date;

	@UpdateDateColumn()
	at_update: Date;

	@DeleteDateColumn()
	at_delete: Date;
}

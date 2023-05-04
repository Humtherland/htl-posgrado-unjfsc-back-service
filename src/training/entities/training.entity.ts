import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'training' })
export class Training {
	@PrimaryGeneratedColumn('increment')
  id: string;

	@Column({
		type: 'text',
	})
	even_name: string;

	@Column({
		type: 'text',
	})
	institution: String;

	@Column({
		type: 'date',
	})
	date: Date;

	@CreateDateColumn()
	at_create: Date;

	@UpdateDateColumn()
	at_update: Date;

	@DeleteDateColumn()
	at_delete: Date;
}

import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'publication' })
export class Publication {
	
	@PrimaryGeneratedColumn('increment')
  id: number;
	
	@Column({
		type: 'text',
	})
	name: string;

	@Column({
		type: 'text',
	})
	type: String;

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

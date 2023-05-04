import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'civil-state' })
export class CivilState {
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

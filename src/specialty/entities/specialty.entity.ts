import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'specialty' })
export class Specialty {
	@PrimaryGeneratedColumn('increment')
  id: number;

	@Column({
		type: 'text',
	})
	name: string;

	@Column({
			type: 'integer',
		})
	quota: number;

	@CreateDateColumn()
	at_create: Date;

	@UpdateDateColumn()
	at_update: Date;

	@DeleteDateColumn()
	at_delete: Date;
}

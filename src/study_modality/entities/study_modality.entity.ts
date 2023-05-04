import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'study-modality' })
export class StudyModality {
	@PrimaryGeneratedColumn('increment')
  id: string;

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

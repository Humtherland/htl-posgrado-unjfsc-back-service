import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({ name: 'work_Experience' })

export class WorkExperience {
	@PrimaryGeneratedColumn('increment')
  id: number;

	@Column({
		type: 'text',
	})
	entity: string;

	@Column({
		type: 'text',
	})
	semester: String;

	@Column({
		type: 'text',
	})
	area: String;

	@Column({
		type: 'text',
	})
	post: String;

	@CreateDateColumn()
	at_create: Date;

	@UpdateDateColumn()
	at_update: Date;

	@DeleteDateColumn()
	at_delete: Date;
}

import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'pay' })
export class Pay {
	@PrimaryGeneratedColumn('increment')
  id: number;

	@Column({
		type: 'text',
	})
	img_pay_one: string;

	@Column({
		type: 'text',
	})
	code_pay_one: string;

	@Column({
		type: 'text',
	})
	img_pay_two: string;

	@Column({
		type: 'text',
	})
	code_pay_two: string;

	@CreateDateColumn()
	at_create: Date;

	@UpdateDateColumn()
	at_update: Date;

	@DeleteDateColumn()
	at_delete: Date;
}

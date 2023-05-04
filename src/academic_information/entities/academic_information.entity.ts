import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'academic-information' })
export class AcademicInformation {

	@PrimaryGeneratedColumn('increment')
  id: number;

	@Column({
		type: 'text',
	})
	secondary_study: string;

	@Column({
		type: 'text',
	})
	academic_degree: String;

	@Column({
		type: 'text',
	})
	college_graduate: String;

	@Column({
		type: 'text',
	})
	professional_school: String;

	@Column({
		type: 'text',
	})
	job_title: String;

	@Column({
		type: 'date',
	})
	start_date: Date;

	@Column({
		type: 'date',
	})
	end_date: Date;

	@Column({
		type: 'text',
	})
	second_specialty: String;

	@Column({
		type: 'text',
	})
	registration_certificate_number: String;

	@Column({
		type: 'text',
	})
	graduates: String;

	@CreateDateColumn()
	at_create: Date;

	@UpdateDateColumn()
	at_update: Date;

	@DeleteDateColumn()
	at_delete: Date;
}

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'applicant' })
export class Applicant {
	@PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({type: 'text',})
    dni: string;

    @Column({type: 'text',})
    name: string;

    @Column({type: 'text',})
    first_name: string;

    @Column({type: 'text',})
    last_name: string;

    @Column({type: 'date',})
    birthday: Date;

    @Column('text')
    gender: string;

    @Column('text')
    cell_phone_number: string;

    @Column('text')
    email: string;

    @Column('text')
    department: string;

    @Column('text')
    province: string;

    @Column('text')
    district: string;

    @Column({
        type: 'text',
    })
    address: string;

		// @OneToOne((type:any) => CivilState, (civilState) => civilState.id, {cascade:true, nullable: false} )
		// @JoinColumn({ name: 'id_civil_status' })
		// 	id_civil_status: number;

		@CreateDateColumn()
		at_create?: Date;

		@UpdateDateColumn()
		at_update?: Date;

		@DeleteDateColumn()
		at_delete?: Date;
}

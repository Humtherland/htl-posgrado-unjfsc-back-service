import { User } from 'src/auth/entities';
import { CivilState } from 'src/civil-state/entities/civil-state.entity';
import { Role } from 'src/role/entities/role.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'person' })
export class Person {
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

    @ManyToOne((type:any) => CivilState, (civilState) => civilState.id, {cascade:true, nullable: false} )
	@JoinColumn({ name: 'id_civil_status' })
    id_civil_status: number;

    @ManyToOne((type:any) => Role, (role) => role.id, {cascade:true, nullable: false} )
	@JoinColumn({ name: 'id_role' })
    id_role: number;

    @OneToOne((type) => User, (user) => user.id_person )
	user?: User;

    @CreateDateColumn()
	at_create?: Date;

	@UpdateDateColumn()
	at_update?: Date;

	@DeleteDateColumn()
	at_delete?: Date;
}

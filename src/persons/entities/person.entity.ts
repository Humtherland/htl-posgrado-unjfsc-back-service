import { User } from '../../auth/entities';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'persons' })
export class Person {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'text',
    })
    dni: string;

    @Column({
        type: 'text',
    })
    firstName: string;

    @Column({
        type: 'text',
    })
    lastName: string;

    @Column({
        type: 'timestamptz',
    })
    birthday: Date;

    @Column('text')
    gender: string;

    @Column({
        type: 'text',
    })
    civilState: string;

    @Column({
        type: 'text',
    })
    zipCode: string;

    @Column({
        type: 'text',
    })
    address: string;

    @Column({
        type: 'text',
    })
    email: string;

    @OneToMany(type => User, user => user.person,
        { cascade: true })
    users: User[];

}

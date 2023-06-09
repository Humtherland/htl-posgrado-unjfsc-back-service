import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
        type: 'text',
    })
    birthday: string;

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

}

import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from '../../persons/entities/person.entity';

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true
    })
    username: string;

    @Column('text', {
        select: false
    })
    password: string;
    
    @ManyToOne(type => Person, person => person.users)
    person: Person;

    @Column('bool', {
        default: true
    })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['user']
    })
    scopes: string[];



    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.username = this.username.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }

}

import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { Person } from './entities';
import { isUUID } from 'class-validator';

@Injectable()
export class PersonsService {

  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}
  
  async create(createPersonDto: CreatePersonDto) {

    const exist = await this.personRepository.findOneBy({ dni: createPersonDto.dni });

    if ( exist )
      throw new BadRequestException(`A person with dni ${ createPersonDto.dni } is already registered`);
    
    try {

      const person = this.personRepository.create(createPersonDto);

      await this.personRepository.save( person );

      return { 
        id: person.id,
        dni: person.dni,
        email: person.email,
       };

    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findAll( paginationDto: PaginationDto ) {

    const { limit = 10, offset = 0 } = paginationDto;

    const products = await this.personRepository.find({
      take: limit,
      skip: offset,
    })

    return products.map( ( person ) => ({
      ...person,
    }))
  }

  async findOne(term: string) {

    let person: Person;

    if ( isUUID(term) ) {
      person = await this.personRepository.findOneBy({ id: term });
    } else {
      person = await this.personRepository.findOneBy({ dni: term });
    }

    if ( !person ) 
      throw new NotFoundException(`Person with ${ isUUID(term) ? "id" : "dni" } ${ term } not found`);

    return person;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {

    const person = await this.personRepository.preload({ id, ...updatePersonDto });

    if ( !person ) throw new NotFoundException(`Person with id: ${ id } not found`);

    try {
      
      await this.personRepository.save( person );
      
      return `Person with id: ${ id } was updated`;
      
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors( error: any ): never {

    if ( error.code === '23505' ) 
      throw new BadRequestException( error.detail );

    console.log(error)

    throw new InternalServerErrorException('Please check server logs');

  }
}

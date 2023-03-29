import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { Person } from './entities/person.entity';

@Module({
  controllers: [PersonsController],
  providers: [PersonsService],
  imports: [
    TypeOrmModule.forFeature([ 
      Person,
    ]),
  ],
  exports: [
    PersonsService,
    TypeOrmModule,
  ]
})
export class PersonsModule {}

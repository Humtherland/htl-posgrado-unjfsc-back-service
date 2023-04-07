import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { Person } from './entities/person.entity';
import { AuthModule } from 'src/auth/auth.module';
import { PersonBootstrap } from './bootstrap/persons.bootstrap';

@Module({
  controllers: [PersonsController],
  providers: [PersonBootstrap, PersonsService],
  imports: [
    TypeOrmModule.forFeature([ 
      Person,
    ]),
    AuthModule
  ],
  exports: [
    PersonBootstrap,
    PersonsService,
    TypeOrmModule,
  ]
})
export class PersonsModule {}

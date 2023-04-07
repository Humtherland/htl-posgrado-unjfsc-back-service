import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { Person } from './entities/person.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PersonsController],
  providers: [PersonsService],
  imports: [
    TypeOrmModule.forFeature([ 
      Person,
    ]),
    AuthModule
  ],
  exports: [
    PersonsService,
    TypeOrmModule,
  ]
})
export class PersonsModule {}

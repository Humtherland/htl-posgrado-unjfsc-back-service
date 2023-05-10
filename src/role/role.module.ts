import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { AuthModule } from 'src/auth/auth.module';
import { RoleBootstrap } from './bootstrap/role.bootstrap';

@Module({
  controllers: [RoleController],
  providers: [
    RoleService,
    RoleBootstrap
  ],
  imports: [
    TypeOrmModule.forFeature([
      Role
    ]),
    AuthModule
  ],
  exports: [
    RoleBootstrap,
    RoleService,
    TypeOrmModule,
  ]
})
export class RoleModule {}

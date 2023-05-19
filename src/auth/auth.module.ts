import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthBootstrap } from './bootstrap/auth.bootstrap';
import { RoleModule } from 'src/role/role.module';

@Module({
  controllers: [AuthController],
  providers: [
    AuthBootstrap,
    AuthService,
    JwtStrategy,
  ],
  imports: [
    ConfigModule,
    // RoleModule,
    TypeOrmModule.forFeature([ User ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ 
        ConfigModule
      ],
      inject: [ ConfigService ],
      useFactory: ( configService: ConfigService ) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            // expiresIn: configService.get('JWT_DURATION')
          }
        }
      }
    }),
    // RoleModule
  ],
  exports: [
    AuthBootstrap,
    JwtModule,
    JwtStrategy,
    PassportModule,
    TypeOrmModule,
  ]
})
export class AuthModule {}

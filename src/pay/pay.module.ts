import { Module } from '@nestjs/common';
import { PayService } from './pay.service';
import { PayController } from './pay.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pay } from './entities/pay.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PayController],
  providers: [PayService],
  imports: [
    TypeOrmModule.forFeature([
      Pay,
    ]),
    AuthModule
  ],
  exports: [
    PayService,
    TypeOrmModule,
  ]
})
export class PayModule {}

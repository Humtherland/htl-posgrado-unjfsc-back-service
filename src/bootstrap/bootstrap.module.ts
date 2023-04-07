import { Module } from '@nestjs/common';
import { BootstrapService } from './bootstrap.service';
import { AuthModule } from '../auth/auth.module';
import { PersonsModule } from '../persons/persons.module';

@Module({
  imports: [AuthModule, PersonsModule],
  controllers: [],
  providers: [BootstrapService],
  exports: [BootstrapService]
})
export class BootstrapModule {

  constructor(
    private readonly bootstrap: BootstrapService
  ) { }

  async onApplicationBootstrap() {
    await this.bootstrap.loadData();
  }

}

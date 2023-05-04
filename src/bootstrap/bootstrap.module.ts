import { Module } from '@nestjs/common';
import { BootstrapService } from './bootstrap.service';
import { AuthModule } from '../auth/auth.module';
import { CivilStateModule } from 'src/civil-state/civil-state.module';
import { DegreeModule } from 'src/degree/degree.module';

@Module({
  imports: [
    AuthModule,
    CivilStateModule,
    DegreeModule
  ],
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

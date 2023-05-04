import { Injectable } from '@nestjs/common';
import { CivilStateBootstrap } from 'src/civil-state/bootstrap/civil-state.bootstrap';
import { AuthBootstrap } from '../auth/bootstrap/auth.bootstrap';

@Injectable()
export class BootstrapService {

  constructor(
    private readonly authBootstrap: AuthBootstrap,
    private readonly civilStateBootstrap: CivilStateBootstrap,
    ) {}

  async loadData() {
    await this.authBootstrap.loadData();
    await this.civilStateBootstrap.loadData();
  }
}

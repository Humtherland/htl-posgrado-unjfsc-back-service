import { Injectable } from '@nestjs/common';
import { PersonBootstrap } from '../persons/bootstrap/persons.bootstrap';
import { AuthBootstrap } from '../auth/bootstrap/auth.bootstrap';

@Injectable()
export class BootstrapService {

  constructor(
    private readonly authBootstrap: AuthBootstrap,
    private readonly personBootstrap: PersonBootstrap,
    ) {}

  async loadData() {
    const authPersonId = await this.personBootstrap.loadAdminData();
    await this.authBootstrap.loadAdminData(authPersonId);
  }
}

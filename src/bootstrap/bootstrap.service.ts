import { Injectable } from '@nestjs/common';
import { CivilStateBootstrap } from 'src/civil-state/bootstrap/civil-state.bootstrap';
import { DegreeBootstrap } from 'src/degree/bootstrap/degree.bootstrap';
import { SchoolBootstrap } from 'src/school/bootstrap/school.bootstrap';
import { AuthBootstrap } from '../auth/bootstrap/auth.bootstrap';

@Injectable()
export class BootstrapService {

  constructor(
    private readonly authBootstrap: AuthBootstrap,
    private readonly civilStateBootstrap: CivilStateBootstrap,
    private readonly degreeBootstrap: DegreeBootstrap,
    private readonly schoolBootstrap: SchoolBootstrap,
    ) {}

  async loadData() {
    await this.authBootstrap.loadData();
    await this.civilStateBootstrap.loadData();
    await this.degreeBootstrap.loadData();
    await this.schoolBootstrap.loadData();
  }
}

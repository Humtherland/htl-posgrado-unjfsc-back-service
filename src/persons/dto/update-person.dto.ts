import { OmitType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create-person.dto';
const { omit } = require('lodash');

export class UpdatePersonDto extends OmitType(CreatePersonDto, ['dni',] as const) {}
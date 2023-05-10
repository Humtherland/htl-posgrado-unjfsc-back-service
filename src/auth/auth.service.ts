import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload, ValidScopes } from './interfaces';
import { JwtService } from '@nestjs/jwt';
import { CreatePostulatorUserDto } from './dto/create-postulator-user.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createPostulator( dto: CreatePostulatorUserDto) {

    let userDto = new CreateUserDto();
    userDto.username = dto.username;
    userDto.password = dto.password;
    userDto.fullName = dto.fullName;
    userDto.scopes = [
      ValidScopes.PERSONS_CREATE,
      ValidScopes.PERSONS_READ,
      ValidScopes.PERSONS_UPDATE,
    ];
    return await this.create(userDto);

  }
  async create( createUserDto: CreateUserDto) {

    try {
      const { password, ...userData } = createUserDto;
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 )
      });

      await this.userRepository.save( user )
      delete user.password;

      return {
        ...user,
        token: this.getJwtToken( { id: user.id } )
      };

    } catch (error) {
      this.handleDBErrors(error);
    }

  }

  async login( loginUserDto: LoginUserDto ) {
    const { password, username } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: { username },
      select: { username: true, password: true, id: true } //! OJO!
    });
    if ( !user ) throw new UnauthorizedException('Credentials are not valid (username)');
    if ( !bcrypt.compareSync( password, user.password ))
    throw new UnauthorizedException('Credentials are not valid (password)');
    delete user.password;
    return {
      ...user,
      token: this.getJwtToken( { id: user.id } )
    };
  }

  private handleDBErrors( error: any ): never {

    if ( error.code === '23505' )
      throw new BadRequestException( error.detail );

    console.log(error)

    throw new InternalServerErrorException('Please check server logs');

  }

  private getJwtToken( payload: JwtPayload ) {

    const token = this.jwtService.sign( payload );
    return token;

  }

  async existByUsername(username: string): Promise<Boolean> {
    const o = await this.userRepository.findOneBy({ username });
    return o !== null;
  }
}

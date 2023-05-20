import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload, ValidScopes } from './interfaces';
import { JwtService } from '@nestjs/jwt';
import { CreatePostulatorUserDto } from './dto/create-postulator-user.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}


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

  async findAll() {
    return await this.userRepository.find({relations: ['id_person']});
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<any>> {
    const query = this.userRepository.createQueryBuilder('q')
    .select(['q.id', 'q.username', 'q.isActive','f.id','f.dni','f.name','f.first_name','f.last_name','f.email','f.cell_phone_number','d.name'])
    .innerJoin('q.id_person','f')
    .innerJoin('f.id_role','d')
    return paginate<any>( query, options);
  }

  async infoUser(userId: string) {
    const user = await this.userRepository
    .createQueryBuilder('auth')
    .leftJoinAndSelect('auth.id_person', 'id_person')
    .where('auth.id = :userId', {userId})
    .getOne();
    return user
    ;
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

import { Controller, Get, Post, Body, Patch, Param, Delete, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { Query, Req, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Auth, GetUser, RawHeaders, RoleProtected } from './decorators';
import { CreateUserDto, LoginUserDto } from './dto';
import { CreatePostulatorUserDto } from './dto/create-postulator-user.dto';
import { User } from './entities';
import { UserRoleGuard } from './guards/user-role.guard';
import { ValidScopes } from './interfaces';
import * as jwt from 'jsonwebtoken';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto ) {
    return this.authService.create( createUserDto );
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto ) {
    return this.authService.login( loginUserDto );
  }

  @Get('info-user')
  @UseGuards(AuthGuard())
  infoUser(@Req() request: Request) {
    const authorizationHeader = request.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    const decodedToken = jwt.verify( token, process.env.JWT_SECRET);
    let id_user = decodedToken['id']
    return this.authService.infoUser(id_user);
  }

  @Get()
  @UseGuards(AuthGuard())
  findPagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
  ) {
    const options: IPaginationOptions = { limit,page,};
    return this.authService.paginate(options);
  }


  // @Get('private')
  // @UseGuards(AuthGuard())
  // testingPrivateRoute(
  //   @Req() request: Express.Request,
  //   @GetUser() user: User,
  //   @GetUser('email') userEmail: string,
  //   @RawHeaders() rawHeaders: string[],
  //   ) {
  //     console.log(user)
  //   return {
  //     ok: true,
  //     message: 'Hola Mundo Private',
  //   }
  // }

  // @Get('private2')
  // @RoleProtected( 
  //   ValidScopes.AUTH_READ,
  //   ValidScopes.AUTH_SUDO
  //  )
  // @UseGuards( AuthGuard(), UserRoleGuard )
  // privateRoute2(
  //   @GetUser() user: User
  // ) {

  //   return {
  //     ok: true,
  //     user
  //   }
  // }

  // @Get('private3')
  // @Auth( ValidScopes.AUTH_SUDO )
  // privateRoute3(
  //   @GetUser() user: User
  // ) {
  //   return {
  //     ok: true,
  //     user
  //   }
  // }
}

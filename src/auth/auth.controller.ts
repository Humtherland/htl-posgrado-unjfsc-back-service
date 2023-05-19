import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Req, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Auth, GetUser, RawHeaders, RoleProtected } from './decorators';
import { CreateUserDto, LoginUserDto } from './dto';
import { CreatePostulatorUserDto } from './dto/create-postulator-user.dto';
import { User } from './entities';
import { UserRoleGuard } from './guards/user-role.guard';
import { ValidScopes } from './interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('postulation-register')
  createPostulatorUser(@Body() createPostulatorUserDto: CreatePostulatorUserDto ) {
    return this.authService.createPostulator( createPostulatorUserDto );
  }

  @Post('register')
  // @Auth( ValidScopes.AUTH_SUDO )
  createUser(@Body() createUserDto: CreateUserDto ) {
    return this.authService.create( createUserDto );
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto ) {
    return this.authService.login( loginUserDto );
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @Req() request: Express.Request,
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @RawHeaders() rawHeaders: string[],
    ) {
      console.log(user)
    return {
      ok: true,
      message: 'Hola Mundo Private',
    }
  }

  @Get('private2')
  @RoleProtected( 
    ValidScopes.AUTH_READ,
    ValidScopes.AUTH_SUDO
   )
  @UseGuards( AuthGuard(), UserRoleGuard )
  privateRoute2(
    @GetUser() user: User
  ) {

    return {
      ok: true,
      user
    }
  }

  @Get('private3')
  @Auth( ValidScopes.AUTH_SUDO )
  privateRoute3(
    @GetUser() user: User
  ) {
    return {
      ok: true,
      user
    }
  }
}

import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SignUpDTO } from './dto/authentication.dto';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from '@nestjs/passport';
import { TokenStorage } from './storage/token.storage';
import { TokenGuard } from './guards/token.guard';
import { UserService } from '../user/user.service';
import { ResponseMessage } from '../core/decorators/response.decorator';
import { ApiBody, ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from 'supertest';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService,
    @Inject('TokenStorage')
    private readonly tokenStorage: TokenStorage,
    private readonly userService: UserService,
  ) {}

  @Post('/sign-in')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  @ApiOkResponse({ description: 'API to sign in users' })
  @UseGuards(AuthGuard('local'))
  async login(@Request() req: any, res: Response) {
    console.log(req.user);
    const token = await this.tokenStorage.generateToken({
      email: req.user.email,
      _id: req.user._id,
      // firstName: req.user.firstName,
      // lastName: req.user.lastName,
    });
    // console.log('inside method');
    return {
      user: req.user,
      token: token,
    };
  }

  @Get('/me')
  @ResponseMessage('User Details extracted successfully')
  @UseGuards(TokenGuard)
  async getMyDetails(@Request() req: any) {
    return this.userService.findOne(req.user._id);
  }

  @Post('/sign-up')
  async signup(@Body() body: SignUpDTO) {
    return this.authService.createUser(body);
  }
}

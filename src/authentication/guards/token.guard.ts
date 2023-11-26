import {
  CanActivate,
  ExecutionContext,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class TokenGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info: any) {
    if (info) {
      throw new HttpException(
        {
          message: 'Token expired',
          messageCode: 'TOKEN_EXPIRED',
          statusCode: 403,
        },
        HttpStatus.FORBIDDEN,
      );
    }
    if (err || !user) throw err || new UnauthorizedException();

    return user;
  }
}

@Injectable()
export class AuthCheckGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info: any) {
    return user;
  }
}

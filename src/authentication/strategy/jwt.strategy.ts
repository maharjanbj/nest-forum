import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'forumadminsecret',
    });
  }

  async validate(payload: any) {
    return {
      _id: payload._id,
      email: payload.email,
      // firstName: payload.firstName,
      // lastName: payload.lastName,
    };
  }
}

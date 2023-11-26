import { JwtService } from '@nestjs/jwt';
import { User, UserType } from '../../user/entities/user.entity';
import { TokenStorage } from './token.storage';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inject } from '@nestjs/common';
// interface TokenBody {
//   readonly type: string;
//   readonly sub: string;
// }
export class JwtStorage implements TokenStorage {
  private static readonly TOKEN_EXPIRY = '7 days';
  private static readonly TOKEN_TYPE = 'authentication';
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserType>,
    @Inject(JwtService)
    private readonly jwtService: JwtService,
  ) {}

  async generateToken(user: any) {
    return this.jwtService.signAsync(user, {
      expiresIn: JwtStorage.TOKEN_EXPIRY,
      secret: 'forumadminsecret',
    });
  }
  public async validateToken(token: string): Promise<User> {
    const tokenBody: any = await this.jwtService.verifyAsync(token);
    if (tokenBody.type !== JwtStorage.TOKEN_TYPE) {
      throw new Error('Invalid token');
    }

    console.log(tokenBody);

    return this.userModel.findOne({ where: { id: tokenBody.sub } });
  }
}

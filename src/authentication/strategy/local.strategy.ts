import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserType } from '../../user/entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from "@nestjs/common";

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserType>,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    console.log(username);
    const user = await this.userModel.findOne({
      email: username,
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email supplied');
    }

    if (await bcrypt.compare(
      String(password), 
      String(user.password),
      )) {
      return user;
    }

    throw new UnauthorizedException('Invalid password supplied');
  }
}

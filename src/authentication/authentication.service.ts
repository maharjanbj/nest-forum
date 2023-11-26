import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserType } from '../user/entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { TokenStorage } from './storage/token.storage';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserType>,
  ) {}

  async createUser(body: any) {
    const password = await bcrypt.hash(body.password, 10);
    return this.userModel.create({
      ...body,
      password: password,
    });
  }
}

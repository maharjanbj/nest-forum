import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserType } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserType>,
  ) {}
  create(createUserDto: any) {
    return this.userModel.create({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      status: createUserDto.status,
    });
  }

  findAll() {
    return this.userModel.find({});
  }

  customMethod() {
    return `This action returns all custom method`;
  }

  findOne(id: any) {
    return this.userModel.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, {
      ...updateUserDto,
    });
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}

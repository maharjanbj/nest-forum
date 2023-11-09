import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryType } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryType>,
  ) {}

  // create(createCategoryDto: CreateCategoryDto) {
  create(createCategoryDto: any) {
    return this.categoryModel.create({
      ...createCategoryDto,
    });
  }

  findAll() {
    return this.categoryModel.find({});
  }

  findOne(id: string) {
    return this.categoryModel.findById(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findByIdAndUpdate(id, {
      ...UpdateCategoryDto,
    });
  }

  remove(id: string) {
    return this.categoryModel.deleteOne({_id: id});
  }
}

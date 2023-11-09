import { Injectable } from '@nestjs/common';
import { CreateFaqCategoryDto } from './dto/create-faq-category.dto';
import { UpdateFaqCategoryDto } from './dto/update-faq-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FaqCategory, FaqCategoryType } from './entities/faq-category.entity';
import { Model } from 'mongoose';

@Injectable()
export class FaqCategoryService {
  constructor(
    @InjectModel(FaqCategory.name)
    private readonly faqCategoryModel: Model<FaqCategoryType>,
  ) {}
  create(createFaqCategoryDto: any) {
    return this.faqCategoryModel.create({
      ...createFaqCategoryDto
    });
  }

  findAll() {
    return this.faqCategoryModel.find({});
  }

  customMethod() {
    return `This action returns all custom method`;
  }

  findOne(id: string) {
    return this.faqCategoryModel.findById(id);
  }

  update(id: string, updateFaqCategoryDto: UpdateFaqCategoryDto) {
    return this.faqCategoryModel.findByIdAndUpdate(id, {
      ...updateFaqCategoryDto,
    });
  }

  remove(id: string) {
    return this.faqCategoryModel.deleteOne({ _id: id });
  }
}

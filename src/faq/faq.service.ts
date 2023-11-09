import { Injectable } from '@nestjs/common';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Faq, FaqType } from './entities/faq.entity';
import { Model } from 'mongoose';

@Injectable()
export class FaqService {
  constructor(
    @InjectModel(Faq.name)
    private readonly faqModel: Model<FaqType>,
  ) {}

  create(createFaqDto: any) {
    return this.faqModel.create({
      ...createFaqDto,
    });
  }

  findAll() {
    return this.faqModel.find({});
  }

  findOne(id: string) {
    return this.faqModel.findById(id).populate('category','_id label').exec();
  }

  update(id: string, updateFaqDto: UpdateFaqDto) {
    return this.faqModel.findByIdAndUpdate(id, {
      ...updateFaqDto,
    });
  }

  remove(id: string) {
    return this.faqModel.deleteOne({ _id: id });
  }
}

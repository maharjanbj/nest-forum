import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { FaqCategory } from '../../faq-category/entities/faq-category.entity';
import { Type } from '@nestjs/class-transformer';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Faq extends Document {
  @Prop({
    unique: true,
  })
  question: string;

  @Prop()
  answer: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: FaqCategory.name,
  })
  @Type(() => FaqCategory)
  category: FaqCategory;
}

export type FaqType = Faq & Document;
export const FaqSchema = SchemaFactory.createForClass(Faq);

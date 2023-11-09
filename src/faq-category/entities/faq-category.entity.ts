import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class FaqCategory extends Document {
  @Prop({
    unique: true,
  })
  label: string;

  @Prop({
    required: true,
  })
  description: string;
}

export type FaqCategoryType = FaqCategory & Document;
export const FaqCategorySchema = SchemaFactory.createForClass(FaqCategory);

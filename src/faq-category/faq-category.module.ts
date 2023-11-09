import { Module } from '@nestjs/common';
import { FaqCategoryService } from './faq-category.service';
import { FaqCategoryController } from './faq-category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqCategory, FaqCategorySchema } from './entities/faq-category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FaqCategory.name, schema: FaqCategorySchema },
    ]),
  ],
  controllers: [FaqCategoryController],
  providers: [FaqCategoryService],
})
export class FaqCategoryModule {}

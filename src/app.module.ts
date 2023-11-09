import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';
import { FaqModule } from './faq/faq.module';
import { FaqCategoryModule } from './faq-category/faq-category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Bijay-Maharjan:admin123@cluster0.onqc4cv.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'forum',
        autoCreate: true
      }
    ),
    UserModule,
    CategoryModule,
    QuestionModule,
    FaqModule,
    FaqCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseTransformInterceptor } from './core/interceptors/response-transform.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  const options = new DocumentBuilder()
    .setTitle('Forum API Documentation')
    .setDescription('Forum API Documentation')
    .setVersion('1.0')
    .setExternalDoc('Postman Collection', '/api-doc-json')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  const customOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'base OKR Docs',
  };
  SwaggerModule.setup('api-doc', app, document, customOptions);

  app.useGlobalInterceptors(new ResponseTransformInterceptor());
  await app.listen(3000);
}
bootstrap();

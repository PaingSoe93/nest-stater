import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerOptions } from './shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, document);
  await app.listen(8000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, transformOptions: { enableImplicitConversion: true } }));
  app.enableCors({ origin: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000'], credentials: true });

  const config = new DocumentBuilder()
    .setTitle('ELAND Contract Service')
    .setDescription('Гэрээний үйлчилгээний API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  SwaggerModule.setup('api/docs', app, SwaggerModule.createDocument(app, config));

  const port = process.env.PORT || 3003;
  await app.listen(port);
  console.log(`📝 Contract Service running on port ${port}`);
}
// eslint-disable-next-line unicorn/prefer-top-level-await
void bootstrap();

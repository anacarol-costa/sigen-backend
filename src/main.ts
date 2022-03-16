import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('SIGEN API')
    .setDescription('Sistema de Gerenciamento de Encomendas e Cardápio')
    .setVersion('1.0')
    .addTag('sigen')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa a validação global
  app.useGlobalPipes(new ValidationPipe({
    transform: true,  // Permite que o NestJS converta os tipos de dados automaticamente
    whitelist: true,  // Remove propriedades não declaradas no DTO
  }));

  await app.listen(3000);
}
bootstrap();

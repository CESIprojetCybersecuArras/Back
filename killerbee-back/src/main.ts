import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: 'http://localhost',
  //   methods: 'GET,PUT,POST,DELETE'
  // })
  await app.listen(4000);
}
bootstrap();

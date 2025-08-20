import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Vite dev server (frontend runs on 5173)
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  // Prefix all routes with /api → e.g. GET /api/hello
  app.setGlobalPrefix('api');

  const port = Number(process.env.PORT) || 8000;
  await app.listen(port);
}
bootstrap();

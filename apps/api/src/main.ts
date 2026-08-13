import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

let cachedServer: any;

async function bootstrapServer() {
  const app = await NestFactory.create(AppModule);

  // Security & Middleware
  app.use(helmet({ contentSecurityPolicy: false }));
  app.enableCors();

  // Global Prefix
  app.setGlobalPrefix('api');

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger Documentation Setup
  const config = new DocumentBuilder()
    .setTitle('Hotel Platform API')
    .setDescription('Documentation officielle des APIs REST de la plateforme hôtelière')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.init();
  return app.getHttpAdapter().getInstance();
}

// Local standalone server execution
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  bootstrapServer().then((server) => {
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log(`🚀 API Server running on: http://localhost:${port}/api`);
      console.log(`📚 Swagger Documentation: http://localhost:${port}/api/docs`);
    });
  });
}

// Vercel Serverless Function Handler
export default async function handler(req: any, res: any) {
  if (!cachedServer) {
    cachedServer = await bootstrapServer();
  }
  return cachedServer(req, res);
}

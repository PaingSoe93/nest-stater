import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Ticket API')
  .setDescription('An API docs for Ticket')
  .setVersion('1.0.0')
  .addBearerAuth()
  .build();

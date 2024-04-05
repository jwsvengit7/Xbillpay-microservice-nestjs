import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('XBILL BILL PAYMENT SERVICE')
  .setDescription('This API covered for authentication about the agent and rabbitmq producer')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api/swagger/bill-module', app, document);
  await app.listen(3002);
}
bootstrap();

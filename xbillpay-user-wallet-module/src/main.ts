import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NotificationConsumerService } from './messanging/consume/wallet.rabbibmq';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('XBILL WALLET  SERVICE')
  .setDescription('This API covered for authentication about the agent and rabbitmq producer')
  .addBearerAuth({
    type:"http",scheme:"Bearer",bearerFormat:"Token"
  },"access-token")
  .setVersion('1.0')
  .build();
  const consumerService = app.get(NotificationConsumerService);
  await consumerService.consumeMessages();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api/swagger/wallet-module', app, document);

  await app.listen(3003);
}
bootstrap();

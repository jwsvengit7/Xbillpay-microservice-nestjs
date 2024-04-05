import { Module } from '@nestjs/common';
import { NotificationConsumerService } from './messanging/notification.service';
import { EventDrivenService } from './services/event.driven';
import MailService from './services/mail.service';


@Module({
  imports: [],
  controllers: [],
  providers: [NotificationConsumerService,EventDrivenService,MailService],
})
export class AppModule {}

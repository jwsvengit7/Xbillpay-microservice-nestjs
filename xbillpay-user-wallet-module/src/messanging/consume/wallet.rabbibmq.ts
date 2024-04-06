
import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';
import { WalletService } from 'src/web/services/wallet.service';


@Injectable()
export class NotificationConsumerService {
  private readonly url: string;
  private readonly queueName: string;

  constructor(private readonly eventDriven: WalletService) {
    this.url = 'amqp://guest:guest@localhost'; // Corrected URL
    this.queueName = 'wallet'; 
    ; 
  }

  async consumeMessages() {
    try {
      const connection = await amqp.connect(this.url)
      const channel = await connection.createChannel();
      await channel.assertQueue(this.queueName);
      console.log(`Waiting for messages in ${this.queueName}.`);

      channel.consume(this.queueName, async(message)  => {
        if (message !== null) {
          console.log(`Received message: ${message.content.toString()}`);
         await this.eventDriven.createVirtualAccount(message);
      
          channel.ack(message);
        }
      });
    } catch (error) {
      console.error('Error consuming messages from RabbitMQ:', error);
    }
  }
}

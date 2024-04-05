import { Module } from '@nestjs/common';
import { TransferController } from './web/controllers/transaction.controllers';
import { TransferService } from './web/services/transaction.service';
import { APIService } from './web/services/api.call.service';
import { AuthGuard } from './guard/auth.guards';
import { ormconfig } from './config/orm';

@Module({
  imports: [ormconfig],
  controllers: [TransferController],
  providers: [TransferService,APIService,AuthGuard],
})
export class AppModule {}
  
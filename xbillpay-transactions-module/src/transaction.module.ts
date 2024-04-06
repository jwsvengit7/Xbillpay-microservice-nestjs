import { Module } from '@nestjs/common';
import { TransferController } from './web/controllers/transaction.controllers';
import { TransferService } from './web/services/transaction.service';
import { APIService } from './web/services/api.call.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { TransferEntity } from './domain/entities/transaction.entity';
import { TransferRepository } from './domain/repository/transfer.respository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransferEntity])],
  controllers: [TransferController],
  providers: [TransferService,TransferRepository, APIService,JwtService],
})
export class TransactionModule {}
  
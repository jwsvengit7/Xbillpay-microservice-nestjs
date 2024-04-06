import { Module } from '@nestjs/common';

import { ormconfig } from './config/orm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionModule } from './transaction.module';

@Module({
  imports: [TransactionModule,TypeOrmModule.forRoot(ormconfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
  
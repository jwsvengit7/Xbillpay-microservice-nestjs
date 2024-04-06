import { TypeOrmModule } from "@nestjs/typeorm";
import { TransferEntity } from "src/domain/entities/transaction.entity";
export const ormconfig:TypeOrmModule = {
    type:"mysql",
    host:"localhost",
    port:3307,
    username:"root",
    password:"",
    database:"xbill_transfer",
    entities: [TransferEntity],

    synchronize:true

}
import { TypeOrmModule } from "@nestjs/typeorm";
import { XBILLPaymentEnity } from "../domain/entities/XBILL.payment.entity";


export const ormconfig:TypeOrmModule = {
    type:"mysql",
    host:"localhost",
    port:3307,
    username:"root",
    password:"",
    database:"xbill_payment",
    entities: [XBILLPaymentEnity],

    synchronize:true

}
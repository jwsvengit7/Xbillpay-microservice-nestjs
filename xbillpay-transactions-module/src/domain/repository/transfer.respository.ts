import { Repository } from "typeorm";
import { TransferEntity } from "../entities/transaction.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TransferRepository{
    constructor(
        @InjectRepository(TransferEntity)
        private transferRepository: Repository<TransferEntity>,
      ) {}
    
}
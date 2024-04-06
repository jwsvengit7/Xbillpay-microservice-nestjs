import { Injectable } from "@nestjs/common";
import { APIService } from "./api.call.service";
import { TransferFundRequestDto } from "../../domain/model/request/transfer.dto";
import {Request} from 'express'
@Injectable()
export class TransferService{
    constructor(private  apiservice: APIService){}
    async transfer(walletDto: TransferFundRequestDto,req:Request) {
        const amount = await this.apiservice.findAccount(walletDto.agentId,req);
        if(amount > walletDto.amount){
          return await  this.apiservice.transfer(walletDto,req);
        }
        throw new Error("Method not implemented.");
    }

}
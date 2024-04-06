import { Injectable } from "@nestjs/common";
import axios from 'axios'
import { Request } from "express";
import { TransferFundRequestDto } from "src/domain/model/request/transfer.dto";
@Injectable()
export class APIService{
    async findAccount(agentId: number,req:Request) {
        let amount=0;
        const response = await axios.get(`http://localhost:3003/api/v3/wallet/check-balance/${agentId}`, {
            headers: {
                'Authorization ': `${req.headers.authorization} `, 
                'Content-Type': 'application/json'
            },
          });
          console.log(response.data.amount)
          amount=response.data.amount
          return amount;

    }
    async transfer(walletDto: TransferFundRequestDto,req:Request) {
        const response = await axios.post(`http://localhost:3003/api/v3/fund-account/${walletDto.agentId}`, {
            headers: {
                'Authorization ': `${req.headers.authorization} `, 
                'Content-Type': 'application/json'
            },
            body:{
                "email":walletDto.email,
                "amount":walletDto.amount,
              }
          },       
          );
          if(response.status==200){
            return `Suuceesful transfer ${walletDto.amount} to  ${walletDto.email}`
          }else{
            return `Error ocucr`
          }    
    }

}
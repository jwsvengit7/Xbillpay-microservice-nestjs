import { BadRequestException, Injectable } from "@nestjs/common";
import { WalletRequestDto } from "../../domain/dto/request/wallet.creation";
import { WalletRepository } from "../../domain/repository/wallet.repository";
import { AddFundRequestDto } from "../../domain/dto/request/wallet.add-fund";
import { DeductDto } from "../../domain/dto/request/deduct.accountdto";
import { ConsumeMessage } from "amqplib";

@Injectable()
export class WalletService {

  constructor(
   
    private readonly walletAccountRepository: WalletRepository,
  ) {}

  async createVirtualAccount(message: ConsumeMessage) {
    const walletDto:WalletRequestDto = JSON.parse(message.content.toString());
    
    return await this.walletAccountRepository.saveWallet(walletDto);
  }

  async fundVirtualAccount(walletDto: AddFundRequestDto) {
    const wallet =await  this.walletAccountRepository.findWalletByEmail(walletDto.email);
    if(wallet){
    
        wallet.amount+=walletDto.amount;
        
     await this.walletAccountRepository.save(wallet);
     return {msg : `${wallet.first_name} have been funded with ${walletDto.amount}`}
    }else{
        throw new BadRequestException("Wallet Not found")
    }
  }

  async  deduct(deductDto: DeductDto) {
    const wallet =await  this.walletAccountRepository.findWalletByEmail(deductDto.email);
    if(wallet){
        wallet.amount-=deductDto.amount;
     await this.walletAccountRepository.save(wallet);
     return "Account have been deducted";
    }else{
        throw new BadRequestException("Wallet Not found")
    }
}

  async checkVirtualAccount(walletId: number) {
    const wallet =await  this.walletAccountRepository.findWalletById(walletId);
    if(wallet){
        
    return{balance :  wallet.amount }
    }else{
        throw new BadRequestException("Wallet Not found")
    }
  }

  async checkCardDetaiks(walletId:number){
    const wallet =await  this.walletAccountRepository.findWalletById(walletId);
    if(wallet){
        
    return wallet;
    }else{
        throw new BadRequestException("Wallet Not found")
    }
  }
}

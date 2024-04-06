import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAccount } from '../entities/user.wallet.account';
import { WalletRequestDto } from '../dto/request/wallet.creation';
import { Utils } from '../../utils/wallet.utils';
import { APPID } from '../enums/app.enums';

@Injectable()
export class WalletRepository {
  constructor(
    @InjectRepository(WalletAccount)
    private walletRepository: Repository<WalletAccount>,
  ) {}

  async saveWallet(newWallet: WalletRequestDto): Promise<WalletAccount> {
    const date = new Date();
    const year = date.getFullYear()+4;
const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
const day = date.getDate().toString().padStart(2, '0'); 

const expire = `${year}-${month}-${day}`;
    console.log(expire)
    const walletAccount = this.walletRepository.create({
        ...newWallet,
        card_type: "verve", 
        cardpin: 1234, 
        cc:123, 
        expire:  expire,
        cardNo: Utils.generateCreditCardNumber().toString(), 
        accountNumber: 123456789, 
        bank: "Wema Bank", 
        bankCode:"022",
      });
    return this.walletRepository.save(walletAccount);
  }

  async findWalletById(uniqueId: number): Promise<WalletAccount | undefined> {
    return this.walletRepository.findOne({ where: { cardUniqId: uniqueId } });
  }
  async findWalletByEmail(email: string): Promise<WalletAccount | undefined> {
    return this.walletRepository.findOne({ where: { email: email } });
  }
  async checkApp(appId: APPID,email:string): Promise<WalletAccount | undefined> {
    return this.walletRepository.findOne({ where: { appId: appId,email:email } });
  }
  async save(newWallet: WalletAccount): Promise<WalletAccount> {
    return this.walletRepository.save(newWallet);
  }

}

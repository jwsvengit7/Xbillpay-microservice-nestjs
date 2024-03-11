import { Injectable } from "@nestjs/common";
import { APIService } from "./api.call.service";

@Injectable()
export class TransferService{
    constructor(private  apiservice: APIService){}
    async transfer(walletDto: any) {
        throw new Error("Method not implemented.");
    }

}
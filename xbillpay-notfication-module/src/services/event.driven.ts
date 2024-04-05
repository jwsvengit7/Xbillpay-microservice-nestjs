import { Injectable } from "@nestjs/common";
import { ConsumeMessage } from "amqplib";
import MailService from "./mail.service";

@Injectable()
export class EventDrivenService{
    
    constructor(private readonly mailService:MailService){}

    async recievedOTP(message:ConsumeMessage){
        const { otp, email } = JSON.parse(message.content.toString());
        console.log(otp)
        console.log(email)
        const html = `
        <div style="padding:20px;padding-left:30px;padding-right:30px">
        <h1>Regsiteration Procces</h1>
        <div>
        Hi ${email}, Your OTP is <h3 style="color:red">${otp}</h3>
        <p>
        Thanks for using our services Hope you enjoy our Bills service
        </p>
        </div>

        </div>`

      await  this.mailService.sendEmail(email,"Regsiteration Procces",html);

        

    }
}
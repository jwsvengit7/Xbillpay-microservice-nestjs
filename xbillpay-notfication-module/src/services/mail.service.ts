import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer';

@Injectable()
export default class MailService{
    private transporter:nodemailer.Transporter;

    constructor(){
        this.transporter=nodemailer.createTransport({
            host:"smtp.cora-wealth.com",
            port:25,
            secure: false,
            auth:{
                user:"xbill-payment@cora-wealth.com",
                pass:"Ey26592f7"
            }
        });
    }

    async sendEmail(to:string,subject:string,html:string):Promise<void>{
        const mailOption = {
            from :"xbill-payment@cora-wealth.com",
            to:to,
            subject:subject,
            html:html
        };
        try{
        await this.transporter.sendMail(mailOption);
        }catch(error){
            console
            .log(error.message)

        }
    }
}
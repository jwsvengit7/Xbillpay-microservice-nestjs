import { Body, Controller, Param, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { BillPaymentService } from "../services/user.bill.service";
import { CreateBillDto } from "../../domain/dto/request/create-bill.dto";
import { Request } from 'express';
import { AuthGuard } from "../../guards/auth.guard";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
@Controller("api/bill-service")
export class BillController{
    private billService:BillPaymentService;

    constructor(
        billService:BillPaymentService) {
            this.billService=billService;
        }
    
        @Post("pay-bill/:agentId")
        @UsePipes(new ValidationPipe())
        @UseGuards(AuthGuard)
        @ApiOperation({ summary: 'Pay Bill', description: 'Returns a BILLS' })
        @ApiResponse({ status: 200, type: [CreateBillDto] ,description: 'Pay Bill' })
        payBill(@Body() registerDto: CreateBillDto,@Param("agentId") agentId:number, @Req() req: Request){
    
            return this.billService.payBill(registerDto,agentId,req);
        }


}
import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { TransferService } from "../services/transaction.service";
import { TransferFundRequestDto } from "../../domain/model/request/transfer.dto";
import { AuthGuard } from "../../guard/auth.guards";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";


@Controller("api/v3/transfer")
export class TransferController{
    private transferService:TransferService;

    constructor(
        transferService:TransferService) {
            this.transferService=transferService; 
        }

        @Post("transfer-fund/:id")
        @UsePipes(new ValidationPipe())
        @ApiOperation({ summary: 'Transafer Funds', description: 'Returns a Transfer Result' })
        @ApiResponse({ status: 200, type: [TransferFundRequestDto] ,description: 'Transafer Funds' })
        @UseGuards(AuthGuard)
        addFunds(@Body() transferDto: TransferFundRequestDto){
            return this.transferService.transfer(transferDto);
        }

     
    }
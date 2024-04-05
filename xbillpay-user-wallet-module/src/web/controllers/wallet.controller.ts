import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { WalletRequestDto } from "../../domain/dto/request/wallet.creation";
import { WalletService } from "../services/wallet.service";
import { AddFundRequestDto } from "../../domain/dto/request/wallet.add-fund";
import { AuthGuard } from "../../middlewares/auth.guards";
import { DeductDto } from "src/domain/dto/request/deduct.accountdto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("api/v3/wallet")
export class WalletController{
    private userService:WalletService;

    constructor(
        userService:WalletService) {
            this.userService=userService; 

        }
    
        @Post("virtual-cards/:id")
        @ApiOperation({ summary: 'createVirtualAccount', description: 'Returns a Response' })
        @ApiResponse({ status: 200, type: [WalletRequestDto] ,description: 'Create VirtualAccount' })
        @UsePipes(new ValidationPipe())
        createUser(@Body() walletDto: WalletRequestDto,@Param('id') id: number){
            return this.userService.createVirtualAccount(walletDto,id);
        }


        @Post("add-fund/:id")
        @UsePipes(new ValidationPipe())
        @ApiOperation({ summary: 'add_funds', description: 'Returns a Response' })
        @ApiResponse({ status: 200, type: [AddFundRequestDto] ,description: 'Add funds' })
        @UseGuards(AuthGuard)
        addFunds(@Body() walletDto: AddFundRequestDto){
            return this.userService.fundVirtualAccount(walletDto);
        }

        @Get("check-balance/:id")
        @UseGuards(AuthGuard)
        @ApiOperation({ summary: 'checkVirtualAccount', description: 'Returns a Response' })
        @ApiResponse({ status: 200, type: [Number] ,description: 'Check Virtual Account' })
        checkBalance(@Param('id') id: number){
            return this.userService.checkVirtualAccount(id);
        }
        @Post("deduct-wallet")
        @UseGuards(AuthGuard)
        @ApiOperation({ summary: 'deduct', description: 'Returns a Response' })
        @ApiResponse({ status: 200, type: [DeductDto] ,description: 'Detuct Virtual Account' })
        deduct_balance(@Body() deductDto:DeductDto){
            return this.userService.deduct(deductDto);
        }

    }
import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { WalletRequestDto } from "../../domain/dto/request/wallet.creation";
import { WalletService } from "../services/wallet.service";
import { AddFundRequestDto } from "../../domain/dto/request/wallet.add-fund";
import { AuthGuard } from "../../middlewares/auth.guards";

@Controller("api/v3/wallet")
export class WalletController{
    private userService:WalletService;

    constructor(
        userService:WalletService) {
            this.userService=userService; 

        }
    
        @Post("virtual-cards/:id")
        @UsePipes(new ValidationPipe())
        createUser(@Body() walletDto: WalletRequestDto,@Param('id') id: number){
            return this.userService.createVirtualAccount(walletDto,id);
        }


        @Post("add-fund/:id")
        @UsePipes(new ValidationPipe())
        @UseGuards(AuthGuard)
        addFunds(@Body() walletDto: AddFundRequestDto){
            return this.userService.fundVirtualAccount(walletDto);
        }

        @Get("check-balance/:id")
        @UseGuards(AuthGuard)
        checkBalance(@Param('id') id: number){
            return this.userService.checkVirtualAccount(id);
        }
        @Post("deduct-wallet")
        @UseGuards(AuthGuard)
        checkBalance(@Param('id') id: number){
            return this.userService.checkVirtualAccount(id);
        }

    }
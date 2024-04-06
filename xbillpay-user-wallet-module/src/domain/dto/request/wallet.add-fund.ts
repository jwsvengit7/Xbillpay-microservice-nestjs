import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty,IsEmail } from 'class-validator';

export class AddFundRequestDto {
    @ApiProperty({
        description:"amount",
        example:"amount"
      })
    @IsNotEmpty()
    amount:number;
    @ApiProperty({
        description:"email",
        example:"email"
      })
    @IsEmail()
    email:string;

 

}
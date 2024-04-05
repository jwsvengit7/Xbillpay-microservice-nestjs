import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty } from "class-validator";

export class VerifyOTPDto{
    @ApiProperty({
        description:"otp",
        example:"otp"
      })
    @IsNotEmpty()
    otp:string;
    @ApiProperty({
        description:"email",
        example:"email"
      })
    @IsNotEmpty()
    email:string;
 
}
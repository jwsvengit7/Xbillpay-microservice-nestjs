import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty } from "class-validator";

export class ResendOTPDto{
    @ApiProperty({
        description:"email",
        example:"email"
      })
    @IsNotEmpty()
    email:string;
 
}
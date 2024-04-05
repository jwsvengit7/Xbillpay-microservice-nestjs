import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto{
    @ApiProperty({
        description:"password",
        example:""
      })
    @IsNotEmpty()
    password:string;
    @ApiProperty({
        description:"email",
        example:""
      })
    @IsEmail()
    email:string;
 
}
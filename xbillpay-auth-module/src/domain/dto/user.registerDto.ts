import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDto{
    @ApiProperty({
        description:"firstName",
        example:""
      })
    @IsNotEmpty()
    firstName:string;
    @ApiProperty({
        description:"lastName",
        example:""
      })
    @IsNotEmpty()
    lastName:string;
    @ApiProperty({
        description:"phone",
        example:""
      })
    @IsNotEmpty()
    phone:string;
    @ApiProperty({
        description:"email",
        example:""
      })
    @IsEmail()
    email:string;

    @ApiProperty({
        description:"type",
        example:""
      })

    @IsNotEmpty()
    type:string;
    @ApiProperty({
        description:"password",
        example:""
      })
    @IsNotEmpty() 
    password:string;
}
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class WalletRequestDto {
  @ApiProperty({
    description:"Currencty",
    example:"NGN,US"
  })
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty({
    description:"Currencty",
    example:"NGN,US"
  })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    description:"debit_currency",
    example:"NGN,US"
  })
  @IsString()
  @IsNotEmpty()
  debit_currency: string;

  @ApiProperty({
    description:"billing_name",
    example:"NGN,US"
  })
  @IsString()
  @IsNotEmpty()
  billing_name: string;


  @ApiProperty({
    description:"billing_address",
    example:"NGN,US"
  })
  @IsString()
  @IsNotEmpty()
  billing_address: string;

  @ApiProperty({
    description:"billing_city",
    example:"NGN,US"
  })

  @IsString()
  @IsNotEmpty()
  billing_city: string;

  @ApiProperty({
    description:"billing_state",
    example:"NGN,US"
  })

  @IsString()
  @IsNotEmpty()
  billing_state: string;

  @ApiProperty({
    description:"billing_postal_code",
    example:""
  })

  @IsString()
  @IsNotEmpty()
  billing_postal_code: string;

  @ApiProperty({
    description:"billing_country",
    example:""
  })
  @IsString()
  @IsNotEmpty()
  billing_country: string;

  @ApiProperty({
    description:"first_name",
    example:""
  })


  @IsString()
  @IsNotEmpty()
  first_name: string;


  @ApiProperty({
    description:"last_name",
    example:""
  })

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    description:"date_of_birth",
    example:""
  })


  @IsDateString()
  @IsNotEmpty()
  date_of_birth: string;

  @ApiProperty({
    description:"email",
    example:""
  })


  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    description:"phone",
    example:""
  })


  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description:"title",
    example:""
  })


  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({
    description:"gender",
    example:""
  })

  @IsOptional()
  @IsString()
  gender: string;
  @ApiProperty({
    description:"callback_url",
    example:""
  })


  @IsOptional()
  @IsString()
  callback_url: string;
}

// create-bill.dto.ts

import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { BillType } from '../../../enums/bill-types.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBillDto {
  @ApiProperty({
    description:"type",
    example:"type"
  })
    @IsNotEmpty()
    @IsEnum(BillType)
    type: BillType;
    @ApiProperty({
      description:"amount",
      example:"amount"
    })

  @IsNotEmpty()
  @IsNumber()
  amount: number;


}

import { ApiProperty } from "@nestjs/swagger";

export class DeductDto{
    @ApiProperty({
        description:"amount",
        example:"amount"
      })
    amount:number;
    @ApiProperty({
        description:"walletID",
        example:"walletID"
      })
    walletID:number;
    @ApiProperty({
        description:"email",
        example:"email"
      })
    email:string
}
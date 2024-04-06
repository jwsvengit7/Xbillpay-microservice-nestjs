import { ApiProperty } from "@nestjs/swagger";

export class TransferFundRequestDto{
    @ApiProperty({
        description:"amount",
        example:"amount"
      })
    amount:number;
    @ApiProperty({
        description:"agentId",
        example:"agentId"
      })
    agentId:number;
    @ApiProperty({
        description:"email",
        example:"string"
      })
    email:string;
}
import { ApiProperty } from "@nestjs/swagger";

export class TransferFundRequestDto{
    @ApiProperty({
        description:"amount",
        example:"amount"
      })
    amount:string;
    @ApiProperty({
        description:"agentId",
        example:"agentId"
      })
    agentId:number;
    @ApiProperty({
        description:"agentSend",
        example:"agentSend"
      })
    agentSend:number;
}
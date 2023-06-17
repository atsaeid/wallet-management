import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GetWaletBalanceDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  user_id: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  address: string;
}

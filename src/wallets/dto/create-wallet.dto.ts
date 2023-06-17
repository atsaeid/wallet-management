import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateWalletDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  user_id: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  blockchain_name: string;
}

import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoadWalletAddressDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  user_id: string;
}

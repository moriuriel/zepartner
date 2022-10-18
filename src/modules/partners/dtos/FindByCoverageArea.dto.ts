import { IsNotEmpty, IsNumberString } from 'class-validator';

export class FindPartnerByCoverageAreaQueryDto {
  @IsNotEmpty()
  @IsNumberString()
  lat: number;
  @IsNotEmpty()
  @IsNumberString()
  lng: number;
}

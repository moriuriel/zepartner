import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Response,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { CreatePartnerDto } from '../dtos';
import { CreatePartnerUseCase, FindPartnerByIDUsecase } from '../usecases';

@Controller('/partners')
export class PartnersController {
  constructor(
    private readonly createUseCase: CreatePartnerUseCase,
    private readonly findByIDUseCase: FindPartnerByIDUsecase,
  ) {}

  @Post()
  async create(
    @Body() body: CreatePartnerDto,
    @Response() response: ExpressResponse,
  ) {
    const partner = await this.createUseCase.execute(body);

    return response.status(HttpStatus.CREATED).json(partner);
  }

  @Get(':partner_id')
  async find(
    @Param('partner_id') partnerId: string,
    @Response() response: ExpressResponse,
  ) {
    const partner = await this.findByIDUseCase.execute(partnerId);

    return response.status(HttpStatus.CREATED).json(partner);
  }
}

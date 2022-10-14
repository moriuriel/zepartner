import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { CreatePartnerDto } from '../dtos';
import { CreatePartnerUseCase } from '../usecases';

@Controller('/partners')
export class PartnersController {
  constructor(private readonly useCase: CreatePartnerUseCase) {}

  @Post()
  async create(
    @Body() body: CreatePartnerDto,
    @Response() response: ExpressResponse,
  ) {
    const partner = await this.useCase.execute(body);

    return response.status(HttpStatus.CREATED).json(partner);
  }
}

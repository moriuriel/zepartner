import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { CreatePartnerDto } from '../dtos';

@Controller('/partners')
export class PartnersController {
  @Post()
  async create(
    @Body() body: CreatePartnerDto,
    @Response() response: ExpressResponse,
  ) {
    return response.status(HttpStatus.CREATED).json(body);
  }
}

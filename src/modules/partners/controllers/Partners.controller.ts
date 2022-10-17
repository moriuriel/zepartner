import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  Param,
  Post,
  Response,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { CreatePartnerDto } from '../dtos';
import { CreatePartnerUseCase, FindPartnerByIDUsecase } from '../usecases';

@Controller('/partners')
@Injectable()
export class PartnersController {
  constructor(
    @Inject('LoggerClient')
    private readonly logger: Logger,
    private readonly createUseCase: CreatePartnerUseCase,
    private readonly findByIDUseCase: FindPartnerByIDUsecase,
  ) {}

  @Post()
  async create(
    @Body() body: CreatePartnerDto,
    @Response() response: ExpressResponse,
  ) {
    const logKey = 'create_partner';
    const partner = await this.createUseCase.execute(body);
    this.logger.log(
      `Key: ${logKey}, StatusCode: ${HttpStatus.CREATED}, Message: "success creating partner"`,
    );
    return response.status(HttpStatus.CREATED).json(partner);
  }

  @Get(':partner_id')
  async find(
    @Param('partner_id') partnerId: string,
    @Response() response: ExpressResponse,
  ) {
    const logKey = 'find_by_id_partner';

    const partner = await this.findByIDUseCase.execute(partnerId);

    this.logger.log(
      `Key: ${logKey}, StatusCode: ${HttpStatus.OK}, Message: "success to find by id partner"`,
    );

    return response.status(HttpStatus.OK).json(partner);
  }
}

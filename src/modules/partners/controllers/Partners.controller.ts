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
  Query,
  Response,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { CreatePartnerDto, FindPartnerByCoverageAreaQueryDto } from '../dtos';
import {
  CreatePartnerUseCase,
  FindPartnerByCoverageAreaUsecase,
  FindPartnerByIDUsecase,
} from '../usecases';

@Controller('/partners')
@Injectable()
export class PartnersController {
  constructor(
    @Inject('LoggerClient')
    private readonly logger: Logger,
    private readonly createUseCase: CreatePartnerUseCase,
    private readonly findByIDUseCase: FindPartnerByIDUsecase,
    private readonly findByCoverageAreaUseCase: FindPartnerByCoverageAreaUsecase,
  ) {}

  @Get()
  async inddex(
    @Query() query: FindPartnerByCoverageAreaQueryDto,
    @Response() response: ExpressResponse,
  ) {
    const { lat, lng } = query;
    const logKey = 'find_by_coverage_area_partner';

    const partner = await this.findByCoverageAreaUseCase.execute({ lat, lng });

    this.logger.log(
      `Key: ${logKey}, StatusCode: ${HttpStatus.OK}, Message: "success to find by lat:${lat} lng:${lng} partner"`,
    );

    return response.status(HttpStatus.OK).json(partner);
  }

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

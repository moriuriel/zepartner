import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerProxy } from '../logger/Logger.proxy';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const logger = LoggerProxy.buildLogger('HttpExceptionFilter');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = exception.getStatus();

    const loggerMessage = {
      path: request.originalUrl,
      statusCode: status,
      name: exception.name,
      response: exception.getResponse(),
    };

    logger.log(`Exception: ${JSON.stringify(loggerMessage)}`);
    response.status(status).json({
      name: exception.name,
      response: exception.getResponse(),
    });
  }
}

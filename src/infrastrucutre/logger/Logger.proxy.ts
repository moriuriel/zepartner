import { Logger } from '@nestjs/common';

export class LoggerProxy {
  static buildLogger(context: string): Logger {
    return new Logger(context);
  }
}

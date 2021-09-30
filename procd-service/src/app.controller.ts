import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'getProcede' })
  getProcede(input) {
    return this.appService.getProcede(input);
  }
  @MessagePattern({ cmd: 'getAllProcedes' })
  getAllProcedes() {
    return this.appService.getAllProcedes();
  }
  @MessagePattern({ cmd: 'editProcede' })
  editProcede(input) {
    return this.appService.getProcede(input);
  }
  @MessagePattern({ cmd: 'removeProcede' })
  removeProcede(input) {
    return this.appService.getProcede(input);
  }
  @MessagePattern({ cmd: 'createProcede' })
  createProcede(input) {
    return this.appService.getProcede(input);
  }
}

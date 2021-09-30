import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'getModele' })
  async getModele(input) {
    return await this.appService.getFreezbe(input);
  }

  @MessagePattern({ cmd: 'GetAllModeles' })
  async getAllModeles() {
    return await this.appService.getAllFreezbes();
  }

  @MessagePattern({ cmd: 'createModele' })
  async createModele(input) {
    return await this.appService.createFreezbe(input);
  }

  @MessagePattern({ cmd: 'editModele' })
  async editModele(input) {
    return await this.appService.editFreezbe(input);
  }

  @MessagePattern({ cmd: 'deleteModele' })
  async deleteModele(input) {
    return await this.appService.deleteFreezbe(input);
  }
}

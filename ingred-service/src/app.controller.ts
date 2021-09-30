import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'getIngredient' })
  getIngredient(data) {
    return this.appService.getIngredient(data);
  }
  @MessagePattern({ cmd: 'createIngredient' })
  createIngredient(data) {
    return this.appService.createIngredient(data);
  }
  @MessagePattern({ cmd: 'editIngredient' })
  editIngredient(data) {
    return this.appService.editIngredient(data);
  }
  @MessagePattern({ cmd: 'deleteIngredient' })
  deleteIngredient(data) {
    return this.appService.deleteIngredient(data);
  }
  @MessagePattern({ cmd: 'getAllIngredients' })
  getAllIngredients() {
    return this.appService.getAllIngredients();
  }

  @MessagePattern({cmd: 'test'}) 
  test() {
    return this.appService.tet()
  }
  

}

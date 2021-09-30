import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'getUserInfo' })
  async getUserInfo(@Body() input) {
    if(!this.appService.Getuser(input)) {
      throw "User not found or incorrect credentials"
    }    
    return await true
  }

  @MessagePattern({ cmd: 'test'})
  async test() {
    try {
      return await this.appService.xD()
    } catch (error) {
      return error
    }
  }
}

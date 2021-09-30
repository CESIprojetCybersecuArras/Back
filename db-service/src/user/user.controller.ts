import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/getUser')
    async getUser(@Body() data) {
        return await this.userService.getUser(data)
    }
}

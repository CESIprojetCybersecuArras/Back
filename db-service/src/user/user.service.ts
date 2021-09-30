import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/schemas/user.schema';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly UserRepository : Repository<User>,) {}

    async getUser(data) {
        const userFound = await this.UserRepository.findOne(data)
        if(userFound.password != data.password) {
            throw new HttpException("Incorrect Request",403)
        }

        return true
    }
    
    
}

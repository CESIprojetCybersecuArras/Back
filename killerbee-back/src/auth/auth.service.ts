import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtSer: JwtService) {}

    async validateUser(email: string, pass: string) {
        const user = {email: email, password: pass}
        return user
    }

    async login(user) {
        //const payload = await this.validateUser(user.email, user.password)
        const u = {email: "azeazeaze", password:"azeazazea"}
        return {
            email: "felix.arcelin@viacesi.fr",
            access_token: this.jwtSer.sign(u)
        }
    }
    

}

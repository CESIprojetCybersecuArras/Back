import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { IUser } from "./interfaces/user.interface";
import { map } from 'rxjs'

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  private Users = [{
    email: "Félix.arcelin@email.com",
    password: "azertyuiop"
  },
  {
    email: "GoreGrinder.arcelin@email.com",
    password: "azertyuiop"
  }]
  
  async Getuser(params: IUser): Promise<any> {
    return await this.httpService.post("http://localhost:8010/user/getUser", params)
    .pipe(
      map((axiosResponse) => {
        return axiosResponse.data;
      }),
    );
  }

  private getUser(param) {
    return this.Users.includes({... param})
  }

  async xD(): Promise<any> {
    try {
      return await this.httpService.get("http://localhost:8010/test")
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
    } catch (error) {
      throw error
    }
  }
}

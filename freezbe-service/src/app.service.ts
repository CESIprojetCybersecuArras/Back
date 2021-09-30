import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getFreezbe(input) {
    return await this.httpService
      .post('http://localhost:8010/modele/getModele', input)
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
  async createFreezbe(input) {
    return await this.httpService
      .post('http://localhost:8010/modele/createFreezbe', input)
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
  async getAllFreezbes() {
    return await this.httpService
      .get('http://localhost:8010/modele/getAllFreezbes')
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
  async editFreezbe(input) {
    return await this.httpService
      .put('http://localhost:8010/modele/editFreezbe', input)
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
  async deleteFreezbe(input) {
    return await this.httpService
      .delete('http://localhost:8010/modele/deleteProcede', input)
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
}

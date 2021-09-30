import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getProcede(input) {
    return await this.httpService
      .post('http://localhost:8010/procede/getProcede', input)
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
  async createProcede(input) {
    return await this.httpService
      .post('http://localhost:8010/procede/createProcede', input)
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
  async getAllProcedes() {
    return await this.httpService
      .get('http://localhost:8010/procede/getAllProcedes')
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
  async editProcede(input) {
    return await this.httpService
      .put('http://localhost:8010/procede/editProcede', input)
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
  async deleteProcede(input) {
    return await this.httpService
      .delete('http://localhost:8010/procede/deleteProcede', input)
      .pipe(
        map((axiosResponse) => {
          return axiosResponse.data;
        }),
      );
  }
}

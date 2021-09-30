import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getIngredient(input) {
    return await this.httpService.post(
      'http://localhost:8010/ingredient/getIngred',
      input,
    ).pipe(map((axiosResponse) => {
      return axiosResponse.data
    }))
  }
  async getAllIngredients() {
    return await this.httpService.get('http://localhost:8010/ingredient/getAllIngred').pipe(map((axiosResponse) => {
      return axiosResponse.data
    }))
  }
  async createIngredient(input) {
    return await this.httpService.post(
      'http://localhost:8010/ingredient/getAllIngred',
      input,
    ).pipe(map((axiosResponse) => {
      return axiosResponse.data
    }))
  }
  async editIngredient(input) {
    return await this.httpService.put(
      'http://localhost:8010/ingredient/editIngredient',
      input,
    ).pipe(map((axiosReponse) => {
      return axiosReponse.data
    }))
  }
  async deleteIngredient(input) {
    return await this.httpService.delete(
      'http://localhost:8010/ingredient/deleteIngredient',
      input,
    ).pipe(map((axiosResponse) => {
      return axiosResponse.data
    }))
  }

    tet() {
      // const r = this.httpService.get('http://localhost:8010/test')
      // return "done"
      return this.httpService.get('http://localhost:8010/test').pipe(map((axiosResponse) => {
        return axiosResponse.data
      }))
  }
}

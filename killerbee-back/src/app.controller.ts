import { Body, Controller, Delete, Get, HttpException, Inject, Post, Put, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express'
import { ClientProxy } from '@nestjs/microservices';
import { AuthService } from './auth/auth.service';
import { CryptItService } from './crypt-it/crypt-it.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private client: ClientProxy,
    @Inject('MODELE_SERVICE') private modService: ClientProxy,
    @Inject('INGRED_SERVICE') private ingrService: ClientProxy,
    @Inject('PROCD_SERVICE') private prcdService: ClientProxy,
    private readonly cryptIt: CryptItService,
    private readonly authService: AuthService
  ) {}


  /**
   * Method used only for testing purposes
   * @param msg 
   * @returns 
   */
  @UseGuards(JwtAuthGuard)
  @Get('/test')
  test(@Body() msg) {
    const encryptedMsg = this.cryptIt.main_encrypt(JSON.stringify(msg))
    const decryptedMsg = this.cryptIt.main_decrypt(encryptedMsg)
    return JSON.parse(decryptedMsg)
  }

  /**
   * Checks if the user exists and then retrieve a JWT token to use accross the app
   * @param data user credentials {email: string, password: string}
   * @param res only use to send access_token
   * @returns 
   */
  @Post('/login')
  async getHello(@Body() data, @Res() res : Response) {
    const comfirmedUSer = true // await this.client.send({ cmd: 'getUserInfo' }, data);
    if(!comfirmedUSer) {
      throw new HttpException("Credentials not correct",403)
    }
    const xD = await this.authService.login(data)
    console.log(xD)
    return await res.send(xD)
  }

  /**
   * Find and retrieve a freezbe 
   * @param data 
   * @returns Freezbe
   */
  //@UseGuards(JwtAuthGuard)
  @Get('/freezbe')
  async getFreezbe(@Body() data) {
    const mod = await this.modService.send({ cmd: 'getModele' }, data);
    console.log(mod)
    // mod.ingredients.forEach(async element => {
    //   element = await this.ingrService.send({ cmd: 'getIngredient' }, mod)
    //   frez.ingredients.push(element)
    // });
    // const ingreds =  await this.ingrService.send({ cmd: 'getIngredient' }, mod)
    // const newingr = {...ingreds}
    // const freezbe = {
    //   ...mod,
    //   ingredients: newingr,
    // } 
    return mod;
  }

  /**
   * Creates a freezbe by calling the freezbe micro service
   * @param data freezbee Object {nom: string, description: string, ingredients: Ingredient[], puHT: Number}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Post('/createFreezbe')
  async createFreezbe(@Body() data) {
    return await this.modService.send({ cmd: 'createModele'},data)
  }

  /**
   * Send request to the Ingredient micro service to edit a freezbe
   * @param data = {toFind: {id: string, nom: string, description : string}, toEdit: {nom: string, description: string}}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Put('/editFreezbe')
  async editFreezbe(@Body() data) {
    return await this.modService.send({cmd: 'editModele'}, data)
  }

  /**
   * Send request to Freezbe icro service to delete freezbe
   * @param data {id: string}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Delete('/deleteFreezbe')
  async deleteFreezbe(@Body() data) {
    return await this.modService.send({cmd: 'deleteModele'}, data)
  }

  /**
   * Call freezbe micro service to retrieve all freezbes
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Get('/freezbes')
  async getAllFreezbes() {
    const mods = await this.modService.send({ cmd: 'getAllModeles' }, null);
    mods.forEach(async (el) => {
      const n = await this.ingrService.send({cmd: 'getIngredient'}, el)
      el.ingredients.push(n);
    })

    return mods;
  }

  /**
   * Call Ingredient micro service, get an ingredient
   * @param data {id: string}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Get('/ingredient')
  async getIngredient(@Body() data) {
    return await this.ingrService.send({ cmd: 'getIngredient' }, data);
  }

  /**
   * call ingredient micro service, create ingredient
   * @param data {nom: string, description: string}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Post('/createIngredient')
  async createIngredient(@Body() data) {
    return await this.ingrService.send({ cmd: 'createIngredient'},data)
  }

  /**
   * call ingredient micro service, edit ingredient
   * @param data {toFind: {id: string, nom: sring, description: string}}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Put('/editIngredient')
  async editIngredient(@Body() data) {
    return await this.ingrService.send({cmd: 'editIngredient'}, data)
  }

  /**
   * call ingredient micro service, delete ingredient
   * @param data {id: string}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Delete('/deleteIngredient')
  async deleteIngredient(@Body() data) {
    return await this.ingrService.send({cmd: 'deleteIngredient'}, data)
  }

  /**
   * call ingredient micro service, retrieves all Ingredients 
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Get('/getAllIngredients')
  async getAllIngredients() {
    return await this.ingrService.send({cmd: 'getAllIngredients'}, null)
  }

  /**
   * call procede micro service, retrieves all procedes
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Get('/getAllProcedes')
  async getAllProcedes() {
    return await this.prcdService.send({cmd: 'getAllProcedes'}, null)
  }

  /**
   * call procede micro service, get a procede
   * @param data {id: string, nom: procede}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Get('/Procede')
  async getProcede(@Body() data) {
    const proc = await this.prcdService.send({ cmd: 'getProcede' }, data);

    const mods =  await this.modService.send({ cmd: 'getModele' }, proc)
    const newMod = {...mods}
    const procede = {
      ...proc,
      ...newMod
    } 
    return procede;
  }

  /**
   * call procede micro service, create a procede
   * @param data {nom: string, description: string, modele: Modele, etapes: string}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Post('/createProcede')
  async createProcede(@Body() data) {
    return await this.prcdService.send({ cmd: 'createProcede'},data)
  }

  /**
   * call procede micro service, edit a procede
   * @param data {toFind: {id: sring nom: string, description: string, modele: Modele, etapes: string}, toEdit: {nom: string, description: string, modele: Modele, etapes: string}}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Put('/editProcede')
  async editProcede(@Body() data) {
    return await this.prcdService.send({cmd: 'editProcede'}, data)
  }

    /**
   * call procede micro service, delete a procede
   * @param data {nom: string, description: string, modele: Modele, etapes: string}
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Delete('/deleteProcede')
  async deleteProcede(@Body() data) {
    return await this.prcdService.send({cmd: 'deleteProcede'}, data)
  }

  /**
   * Only used for testing purposes
   * @returns 
   */
  //@UseGuards(JwtAuthGuard)
  @Get('/test2') 
  async test2() {
    return await this.ingrService.send({cmd: 'test'},"xD")
  }

  @Get()
  aze() {
    return "xD"
  }

  /**
   * Allows us to decrypt incoming Objects
   * @param data {Object}
   * @returns Object
   */
  private decrypt(data) {
    const decrypted = this.cryptIt.main_decrypt(JSON.stringify(data))
    return JSON.parse(decrypted)
  }

  /**
   * Allows us to crypt incoming Objects
   * @param data {Object}
   * @returns Object
   */
  private crypt(data) {
    const crypt = this.cryptIt.main_encrypt(JSON.stringify(data))
    return JSON.parse(crypt);
  }
}

import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProcedeService } from './procede.service';

@Controller('procede')
export class ProcedeController {
    constructor(private readonly procedeService: ProcedeService) {}

    @Post('/create_procede')
    async createModele(@Body() newProcede) {
        try {
            return await this.procedeService.create(newProcede);
        } catch (error) {
            return error;
        }
    }

    @Delete('/delete_procede')
    async deleteProcede(@Body() Procede) {
        try {
            return await this.procedeService.remove(Procede);
        } catch (error) {
            return error;
        }
    }

    @Get('/get_procede')
    async getprocede(@Body() Procede) {
        try {
            return await this.procedeService.findByName(Procede);
        } catch (error) {
            return error;
        }
    }
    
    @Get('/get_all_procedes')
    async listAllArticles() {

        try {
            return this.procedeService.findAll();
        } catch (error) {
            return error;
        }
    }
    
    @Put('/update_procede')
    async editArticle(@Body() procd) {
        try {
            return await this.procedeService.edit(procd);

        } catch (error) {
            return error;
        }
    }
}

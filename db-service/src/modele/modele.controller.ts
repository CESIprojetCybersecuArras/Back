import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ModeleService } from './modele.service';

@Controller('modele')
export class ModeleController {
    constructor(private readonly modele: ModeleService) {}

    @Post('/create_modele')
    async createModele(@Body() newModele) {
        try {
            return await this.modele.create(newModele);
        } catch (error) {
            return error;
        }
    }

    @Delete('/delete_modele')
    async deleteModele(@Body() Modele) {
        try {
            return await this.modele.remove(Modele);
        } catch (error) {
            return error;
        }
    }

    @Get('/get_modele')
    async getModele(@Body() Modele) {
        try {
            return await this.modele.findByName(Modele);
        } catch (error) {
            return error;
        }
    }
    
    @Get('/get_all_modeles')
    async listAllArticles() {

        try {
            return this.modele.findAll();
        } catch (error) {
            return error;
        }
    }
    
    @Put('/update_modele')
    async editArticle(@Body() modl) {
        try {
            return await this.modele.edit(modl);

        } catch (error) {
            return error;
        }
    }
}

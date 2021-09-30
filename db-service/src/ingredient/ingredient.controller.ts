import { Body, Controller, Delete, Get, Post, Put, Req, UnauthorizedException } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Request } from 'express'

@Controller('ingredient')
export class IngredientController {
    constructor(private readonly ingredient: IngredientService) {}

    @Post('/create_ingredient')
    async createIngredient(@Body() newIngredient) {
        try {
            return await this.ingredient.create(newIngredient);
        } catch (error) {
            return error;
        }
    }

    @Delete('/delete_ingredient')
    async deleteIngredient(@Body() Ingredient) {
        try {
            return await this.ingredient.remove(Ingredient);
        } catch (error) {
            return error;
        }
    }

    @Get('/get_ingredient')
    async getIngredient(@Body() Ingredient) {
        try {
            return await this.ingredient.findByName(Ingredient);
        } catch (error) {
            return error;
        }
    }
    
    @Get('/get_all_ingredients')
    async listAllArticles(@Req() req: Request) {
        try {
            return this.ingredient.findAll();
        } catch (error) {
            return error;
        }
    }
    
    @Put('/update_article')
    async editArticle(@Body() ingr) {
        try {
            return await this.ingredient.edit(ingr);

        } catch (error) {
            return error;
        }
    }

}

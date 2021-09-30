import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from 'src/schemas/ingredient.schema';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {
    constructor(
        @InjectRepository(Ingredient) private readonly ingredientsRepository: Repository<Ingredient>,
    ) {}

    create(ingredientToCreate): Promise<Ingredient> {
        const ingredient = new Ingredient();
        ingredient.nom = ingredientToCreate.nom;
        ingredient.description = ingredientToCreate.description;
        console.log(ingredient)

        return this.ingredientsRepository.save(ingredient, {

        });
    }

    async findAll(): Promise<Ingredient[]> {
        return this.ingredientsRepository.find();
    }

    findOneById(id: string): Promise<Ingredient> {
        return this.ingredientsRepository.findOne(id);
    }

    findByName(nom: string) {
        return this.ingredientsRepository.findOne(nom)
    }

    async remove(id: string) {
        await this.ingredientsRepository.delete(id);
    }

    async edit(ingredient): Promise<Ingredient> {
        const ingredientId = await this.ingredientsRepository.findOne(ingredient.toFind);
        this.ingredientsRepository.merge(ingredientId, ingredient.toEdit);
        const result = await this.ingredientsRepository.save(ingredientId)
        return result;
    }
}

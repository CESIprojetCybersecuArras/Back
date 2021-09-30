import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from 'src/schemas/ingredient.schema';
import { Modele } from 'src/schemas/modele.schema';
import { Repository } from 'typeorm'

@Injectable()
export class ModeleService {
    constructor(@InjectRepository(Modele) private readonly modelesRepository : Repository<Modele>,) {}

    create(modeleToCreate: Modele): Promise<Modele> {
        const modele = new Modele();

        modele.nom =  modeleToCreate.nom;
        modele.description = modeleToCreate.description;
        modele.puht = modeleToCreate.puht
        // const ingredients = []
        // modeleToCreate.ingredient.forEach(element => {
        //     const i = new Ingredient()
        //     i.nom = element.nom
        //     i.description = element.description
        //     ingredients.push(i)
        // });

        // let ingr = new Ingredient()
        // ingr.nom = "ssqd"
        // ingr.description ='ehjhfrhf'
        // ingr.id = null
        // modele.puht = modeleToCreate.puht;

        return this.modelesRepository.save(modele);
    }

    async findAll(): Promise<Modele[]> {
        return this.modelesRepository.find();
    }

    findOnebyId(id: string): Promise<Modele> {
        return this.modelesRepository.findOne(id);
    }

    findByName(nom: string) {
        return this.modelesRepository.findOne(nom);
    }
    
    async remove(id: string) {
        await this.modelesRepository.delete(id)
    }

    async edit(modele): Promise<Modele> {
        const Modele = await this.modelesRepository.findOne(modele.toFind);
        this.modelesRepository.merge(Modele, modele.toEdit);
        const result = await this.modelesRepository.save(Modele)
        return result;
    }
}

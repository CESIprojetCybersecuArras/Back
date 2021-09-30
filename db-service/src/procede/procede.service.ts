import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Procede } from 'src/schemas/procede.schema';
import { Repository } from 'typeorm';

@Injectable()
export class ProcedeService {
    constructor(@InjectRepository(Procede) private readonly procedesRepository : Repository<Procede>,) {}
    
    create(ProcedeToCreate): Promise<Procede> {
        const procede = new Procede();

        procede.nom =  ProcedeToCreate.nom;
        procede.description = ProcedeToCreate.description;
        // procede.modele = ProcedeToCreate.modele;
        procede.etapes = ProcedeToCreate.etapes;

        return this.procedesRepository.save(procede);
    }

    async findAll(): Promise<Procede[]> {
        return this.procedesRepository.find();
    }

    findOnebyId(id: string): Promise<Procede> {
        return this.procedesRepository.findOne(id);
    }

    findByName(nom: string) {
        return this.procedesRepository.findOne(nom);
    }
    
    async remove(id: string) {
        await this.procedesRepository.delete(id)
    }

    async edit(procede): Promise<Procede> {
        const Procede = await this.procedesRepository.findOne(procede.toFind);
        this.procedesRepository.merge(Procede, procede.toEdit);
        const result = await this.procedesRepository.save(Procede)
        return result;
    }

}

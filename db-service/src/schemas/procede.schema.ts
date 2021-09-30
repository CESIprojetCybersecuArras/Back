import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Modele } from "./modele.schema";

@Entity()
export class Procede {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  description: string;

  // @OneToOne(type => Modele, modele => modele.procede)
  // modele: Procede[];
  
  @Column()
  etapes: string;
}
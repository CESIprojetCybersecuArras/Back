import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Modele } from "./modele.schema";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column("text")
  description: string;

  // @ManyToMany(type => Modele, modele => modele.ingredient)
  // @JoinTable()
  // modeles: Modele[]
}

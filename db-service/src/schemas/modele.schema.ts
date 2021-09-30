import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ingredient } from "./ingredient.schema";
import { Procede } from "./procede.schema";

@Entity()
export class Modele {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  description: string;

  // @ManyToMany(type => Ingredient, ingredient => ingredient.id)
  // ingredient: Ingredient[];

  // @OneToOne(type => Procede, procede => procede.modele)
  // @JoinColumn()
  // procede: Procede

  @Column()
  puht: number;
}
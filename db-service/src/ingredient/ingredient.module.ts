import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from 'src/schemas/ingredient.schema';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  providers: [IngredientService],
  controllers: [IngredientController]
})
export class IngredientModule {}

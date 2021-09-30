import { Module } from '@nestjs/common';
import { ModeleService } from './modele.service';
import { ModeleController } from './modele.controller';
import { Modele } from 'src/schemas/modele.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Modele])],
  providers: [ModeleService],
  controllers: [ModeleController]
})
export class ModeleModule {}

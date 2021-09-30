import { Module } from '@nestjs/common';
import { ProcedeService } from './procede.service';
import { ProcedeController } from './procede.controller';
import { Procede } from 'src/schemas/procede.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Procede])],
  providers: [ProcedeService],
  controllers: [ProcedeController]
})
export class ProcedeModule {}

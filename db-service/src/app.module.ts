import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientModule } from './ingredient/ingredient.module';
import { ModeleModule } from './modele/modele.module';
import { ProcedeModule } from './procede/procede.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: '172.16.5.15',
    port: 1433,
    username: 'sa',
    password: '<djG9ySJ7BKqv53EM>',
    database: 'erp-killerbee',
    autoLoadEntities: true,
    synchronize: false,
    options: {
      encrypt: false,
    },
    schema: "SCH_PROD"
  }),
  ProcedeModule, IngredientModule, UserModule, ModeleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

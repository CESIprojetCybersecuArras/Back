import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(),HttpModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: 'USER_SERVICE',
    inject: [ConfigService],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useFactory: (configService: ConfigService) => {
      ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8000
        },
      })
    },
  }],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from 'path';
import SubscribersController from './kettles.controller';

@Module({
  controllers: [SubscribersController],
  providers: [{
    provide: 'KETTLE_PACKAGE',
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.GRPC,
        options: {
          package: 'kettles',
          protoPath: join(__dirname, '../../kettles.proto'),
          url: configService.get('GRPC_CONNECTION_URL'),
        },
      });
    },
    inject: [ConfigService],
  }]
})
export class KettlesModule {}

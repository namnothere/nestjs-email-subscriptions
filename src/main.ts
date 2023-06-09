import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);

  await app.listen(3000);
  // await app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'subscribers',
  //     protoPath: join(__dirname, '../subscribers.proto'),
  //     url: configService.get('GRPC_CONNECTION_URL'),
  //   }
  // });

  // app.startAllMicroservices();

}
bootstrap();

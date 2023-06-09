import { Body, ClassSerializerInterceptor, Controller, Get, Inject, OnModuleInit, Post, UseInterceptors } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { createKettleDto } from './Dto/createKettle.dto';
import KettleInterface from './kettles.interface';

@Controller('kettles')
@UseInterceptors(ClassSerializerInterceptor)
export default class KettlesController implements OnModuleInit {
  private gRpcService: KettleInterface;
  constructor(
    @Inject('KETTLE_PACKAGE') private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.gRpcService = this.client.getService<KettleInterface>('Kettles');
  }

  @Get()
  async getSubscribers() {
    try {
      return this.gRpcService.GetAllKettles({});
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Post()
  async createPost(@Body() kettle: createKettleDto) {
    try {
      return this.gRpcService.addKettle(kettle);
    } catch (err) {
      return err;
    }
  }
  
}

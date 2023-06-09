import { Body, ClassSerializerInterceptor, Controller, Get, Inject, OnModuleInit, Post, UseInterceptors } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateSubscriberDto } from './dto/createSubscriber.dto';
import SubscriberInterface from './subscribers.interface';

@Controller('subscribers')
@UseInterceptors(ClassSerializerInterceptor)
export default class SubscribersController implements OnModuleInit {
  private gRpcService: SubscriberInterface;
  constructor(
    @Inject('SUBSCRIBERS_PACKAGE') private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.gRpcService = this.client.getService<SubscriberInterface>('Subscribers');
  }

  @Get()
  async getSubscribers() {
    try {
      return this.gRpcService.GetAllSubscribers({});
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Post()
  async createPost(@Body() subscriber: CreateSubscriberDto) {
    try {
      return this.gRpcService.AddSubscriber(subscriber);
    } catch (err) {
      return err;
    }
  }
  
}

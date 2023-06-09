import { CreateSubscriberDto } from "./dto/createSubscriber.dto";
// import Subscriber from "./subscriber.entity";

interface SubscriberInterface {
    AddSubscriber(subscriber: CreateSubscriberDto): Promise<any>
    GetAllSubscribers(params: {}): Promise<{data: any[]}>
}

export default SubscriberInterface;
import { createKettleDto } from "./Dto/createKettle.dto";
// import Subscriber from "./subscriber.entity";

interface KettleInterface {
    addKettle(subscriber: createKettleDto): Promise<any>
    GetAllKettles(params: {}): Promise<any>
}

export default KettleInterface;
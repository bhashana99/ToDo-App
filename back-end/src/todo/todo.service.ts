import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {

    getAllToDos(){
        return ["q1","q2"];
    }
}

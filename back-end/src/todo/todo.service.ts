import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDoEntity } from 'src/Entity/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {

    constructor(@InjectRepository (ToDoEntity) private todoRepo:Repository<ToDoEntity>){}

    async getAllToDos(){
        return await this.todoRepo.find();
    }
}

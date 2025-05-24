import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDoEntity, ToDoStatus } from 'src/Entity/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {

    constructor(@InjectRepository (ToDoEntity) private todoRepo:Repository<ToDoEntity>){}

    async getAllToDos(){
        return await this.todoRepo.find();
    }

    async createTodo(title:string, description:string){
        const todo:ToDoEntity = new ToDoEntity();

        todo.title = title;
        todo.description = description;
        todo.status = ToDoStatus.OPEN;

        this.todoRepo.create(todo);

        return await this.todoRepo.save(todo);
    }
}

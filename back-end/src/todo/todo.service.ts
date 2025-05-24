import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateToDoDTO } from 'src/DTO/create-todo.dto';
import { ToDoEntity, ToDoStatus } from 'src/Entity/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {

    constructor(@InjectRepository (ToDoEntity) private todoRepo:Repository<ToDoEntity>){}

    async getAllToDos(){
        return await this.todoRepo.find();
    }

    async createTodo(data:CreateToDoDTO){
        const todo:ToDoEntity = new ToDoEntity();

        todo.title = data.title;
        todo.description = data.description;
        todo.status = ToDoStatus.OPEN;

        try {
            return await this.todoRepo.save(todo);
        } catch (error) {
           throw new InternalServerErrorException("Something went wrong, todo not created.") 
        }

        
    }

    async changeTodoStatus(id:number,status:ToDoStatus){
        await this.todoRepo.update({id},{status})

        return  this.todoRepo.findOne({where:{id}});
    }

    async deleteTodo(id:number){
        try {
          return  await this.todoRepo.delete(id);
        } catch (error) {
            throw new InternalServerErrorException("Something went wrong") 
        }
      
    }
}

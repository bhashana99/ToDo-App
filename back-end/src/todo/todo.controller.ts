import { CreateToDoDTO } from 'src/DTO/create-todo.dto';
import { TodoService } from './todo.service';
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';

@Controller('todos')
export class TodoController {

    // toDoService;

    // constructor(todoService:TodoService){
    //     this.toDoService=todoService;
    // }
    
    constructor(private todoService:TodoService){}

    @Get()
    getAllToDos(){
        return  this.todoService.getAllToDos();
    }

    @Post()
    createTodo(@Body(ValidationPipe) data:CreateToDoDTO){
      

        return this.todoService.createTodo(data);
    }
}

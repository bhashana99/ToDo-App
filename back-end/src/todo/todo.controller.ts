import { TodoStatusValidationPipe } from './../pipes/TodoStatusValidation.pipe';
import { CreateToDoDTO } from 'src/DTO/create-todo.dto';
import { TodoService } from './todo.service';
import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ToDoStatus } from 'src/Entity/todo.entity';

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

    @Patch(':id')
    changeTodoStatus(@Body('status',TodoStatusValidationPipe) status:ToDoStatus,@Param('id') id:number){
        return    this.todoService.changeTodoStatus(id,status);
    }
}

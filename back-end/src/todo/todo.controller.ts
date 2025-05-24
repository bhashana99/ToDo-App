import { TodoService } from './todo.service';
import { Controller, Get } from '@nestjs/common';

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
}

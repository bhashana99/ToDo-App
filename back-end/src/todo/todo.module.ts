import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from 'src/Entity/todo.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ToDoEntity])
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}

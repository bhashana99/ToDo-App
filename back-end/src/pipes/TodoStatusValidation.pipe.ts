import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ToDoStatus } from "src/Entity/todo.entity";



export class TodoStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [ToDoStatus.OPEN, ToDoStatus.WORK_IN_PROGRESS, ToDoStatus.COMPLETED];
  
    transform(value: any, metadata: ArgumentMetadata): any {
      value = value.toUpperCase();
  
      if (!this.isStatusValid(value)) {
        throw new BadRequestException(`${value} is an invalid status.`);
      }
      return value;
    }
  
    private isStatusValid(status : any) {
      const index = this.allowedStatus.indexOf(status);
  
      return index !== -1;
    }
  
  }
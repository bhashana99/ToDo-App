import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('todos')
export class ToDoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    status: ToDoStatus;

}


export enum ToDoStatus{
    OPEN = "OPEN",
    WORK_IN_PROGRESS = "WIP",
    COMPLETED = "COMPLETED"
}
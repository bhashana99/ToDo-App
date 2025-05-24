import { IsDate, IsNotEmpty, IsOptional, MaxLength } from "class-validator";

export class CreateToDoDTO{

    @IsNotEmpty()
    @MaxLength(15,{message:'Max length is 15 characters.'})
    title: string;

    @IsNotEmpty()
    description: string;

}
import { IsNotEmpty } from "class-validator";

export class UserLogInDTO{
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    password:string
}
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegistrationDTO } from 'src/DTO/UserRegistration.dto';
import { UserLogInDTO } from 'src/DTO/UserLogin.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('register')
    UserRegistration(@Body(ValidationPipe) registrationDto:UserRegistrationDTO){
       return this.authService.userRegistration(registrationDto);
    }

    @Post('login')
    UserLogin(@Body(ValidationPipe) userLoginDto:UserLogInDTO){
        return this.authService.userLogin(userLoginDto);
    }
}

import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegistrationDTO } from 'src/DTO/UserRegistration.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('register')
    UserRegistration(@Body(ValidationPipe) registrationDto:UserRegistrationDTO){
       return this.authService.userRegistration(registrationDto);
    }
}

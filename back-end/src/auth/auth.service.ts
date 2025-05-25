import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegistrationDTO } from 'src/DTO/UserRegistration.dto';
import { UserEntity } from 'src/Entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserLogInDTO } from 'src/DTO/UserLogin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(UserEntity) private repo:Repository<UserEntity>, 
                                              private jwt:JwtService){}


    async userRegistration(userRegistrationDto:UserRegistrationDTO){
        const {username,password} = userRegistrationDto;

        const hashed = await bcrypt.hash(password,10);
        const salt =  bcrypt.getSalt(hashed);

        const newUser = new UserEntity();

        newUser.username = username;
        newUser.password = hashed;
        newUser.salt = salt;

        try {
            return this.repo.save(newUser);
        } catch (error) {
             throw new InternalServerErrorException("Something went wrong, user not created.") 
        }  
    }

    async userLogin(userLoginDto:UserLogInDTO){
        const {username,password} = userLoginDto;

        const user = await this.repo.findOne({where:{username}});

        if(!user){
            throw new UnauthorizedException("Invalid credentials");
        }

        const isPasswordMatch = await bcrypt.compare(password,user.password);

        if(isPasswordMatch){
            const jwtPayload = {username};
            const jwtToken = await this.jwt.signAsync(jwtPayload)

            return {token:jwtToken}

        }else{
            throw new UnauthorizedException('Invalid credentials')
        }


    }
}

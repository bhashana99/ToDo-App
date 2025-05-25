import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegistrationDTO } from 'src/DTO/UserRegistration.dto';
import { UserEntity } from 'src/Entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(UserEntity) private repo:Repository<UserEntity>){}


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
}

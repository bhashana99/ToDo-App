import { Jwt } from './../../node_modules/@types/jsonwebtoken/index.d';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/Entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: "secretKeyThisShouldPrivateInDotENVfile",
      signOptions:{
        algorithm: 'HS512',
        expiresIn:'1d'
      }
    }),
    PassportModule.register({
      defaultStrategy:'Jwt'
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}

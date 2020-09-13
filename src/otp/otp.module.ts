import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OTPController } from './otp.controller';
import { OTPService } from './otp.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],

  providers: [OTPService],

  controllers: [OTPController],
})
export class OTPModule {}

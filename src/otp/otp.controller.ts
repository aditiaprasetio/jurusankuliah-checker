import { Controller, Post } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { OTPService } from './otp.service';

@ApiUseTags('OTP')
@Controller('otp')
@ApiBearerAuth()
export class OTPController {
  constructor(public service: OTPService) {}

  @Post('send')
  send() {
    return this.service.send();
  }

  @Post('request')
  requestOTP() {
    return this.service.requestOTP();
  }
}

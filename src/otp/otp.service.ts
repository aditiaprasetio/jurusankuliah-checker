import { Injectable } from '@nestjs/common';
const twilio = require('twilio');
const authy = require('authy')('tXHUFgBTWOXB2687tZ9b3JP47q6W79ER');

@Injectable()
export class OTPService {
  constructor() {}

  async send() {
    try {
      const accountSid = 'ACd123c62c9c075b4db558503e45b43be0'; // Your Account SID from www.twilio.com/console
      const authToken = '98efe95d8f62fe2329fc286572edcd88'; // Your Auth Token from www.twilio.com/console

      const client = new twilio(accountSid, authToken);

      client.messages
        .create({
          body: 'Hello from Node',
          to: '+6285645991577', // Text this number
          from: '+16019800185', // From a valid Twilio number
        })
        .then(message => console.log(message.sid));
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async requestOTP() {
    try {
      const authy_id = '244302188';

      authy.request_sms(authy_id, (err, res) => {
        if (res) {
          console.log('res', res.message);
        }
        if (err) {
          console.info('err', JSON.stringify(err));
        }
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { EFeatureList } from './mail.dto';

export class SendMailDto {
  feature: EFeatureList;
  subject: string;
  emails: string[];
  data: any;
}

@Injectable()
export class MailService {
  async sendMail(data: SendMailDto): Promise<any> {
    try {
      const res = await axios({
        method: 'POST',
        url: process.env.URL_MAIL_SERVICE + `/mail/send`,
        data,
      });

      return res;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

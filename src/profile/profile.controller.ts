import {
  Controller,
  HttpException,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Profile } from './profile.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { getAccountId } from '../utils/auth';

@Crud({
  model: {
    type: Profile,
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
  query: {
    join: {
      department: {
        exclude: [],
      },
      want_department: {
        exclude: [],
      },
    },
  },
  routes: {
    exclude: [
      'createManyBase',
      'deleteOneBase',
      'getManyBase',
      'replaceOneBase',
    ],
  },
})
@ApiTags('Profile')
@Controller('profile')
@ApiBearerAuth()
export class ProfileController implements CrudController<Profile> {
  constructor(public service: ProfileService) {}

  get base(): CrudController<Profile> {
    return this;
  }

  // @Override()
  // async updateOne(
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() dto: Profile,
  //   @Req() request: Request,
  // ) {
  //   try {
  //     if ((request.headers as any).authorization) {
  //       const accountId = await getAccountId(
  //         (request.headers as any).authorization,
  //       );

  //       if (!dto.id) {
  //         dto = {
  //           ...dto,
  //           id: accountId,
  //         };
  //       }

  //       const check = await this.base.getOneBase(req);

  //       if (check) {
  //         return await this.base.updateOneBase(req, dto);
  //       } else {
  //         return await this.base.createOneBase(req, dto);
  //       }
  //     } else {
  //       throw new UnauthorizedException();
  //     }
  //   } catch (err) {
  //     throw new HttpException(err.message || err.response, err.status);
  //   }
  // }
}

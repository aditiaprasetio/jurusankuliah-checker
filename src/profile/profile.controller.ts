import {
  Controller,
  HttpException,
  Req,
  Request,
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
      // tslint:disable-next-line: object-literal-key-quotes
      department: {
        eager: true,
      },
      // tslint:disable-next-line: object-literal-key-quotes
      want_department: {
        eager: true,
      },
      'department.university': {
        eager: true,
        alias: 'department_university',
      },
      'want_department.university': {
        eager: true,
        alias: 'want_department_university',
      },
      'department.department_family': {
        eager: true,
        alias: 'department_family',
      },
      'want_department.department_family': {
        eager: true,
        alias: 'want_department_family',
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

  @Override()
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Profile,
    @Req() request: Request,
  ) {
    try {
      const find = req.parsed.paramsFilter.find(
        (item: any) => item.field === 'id',
      );
      const id = find.value;

      if ((request.headers as any).authorization) {
        const accountId = await getAccountId(
          (request.headers as any).authorization,
        );

        return await this.service.customUpdateOne(id, dto);
      } else {
        throw new UnauthorizedException();
      }
    } catch (err) {
      throw new HttpException(err.message || err.response, err.status);
    }
  }
}

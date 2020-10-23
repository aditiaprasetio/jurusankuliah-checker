import {
  Controller,
  HttpException,
  Req,
  UnauthorizedException,
  Request,
} from '@nestjs/common';
import {
  CreateManyDto,
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { SubjectLike } from './subjectLike.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SubjectLikeService } from './subjectLike.service';
import { getAccountId, getAccountDetail } from '../utils/auth';

@Crud({
  model: {
    type: SubjectLike,
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
})
@ApiTags('SubjectLike')
@Controller('subjectlike')
@ApiBearerAuth()
export class SubjectLikeController implements CrudController<SubjectLike> {
  constructor(public service: SubjectLikeService) {}

  get base(): CrudController<SubjectLike> {
    return this;
  }

  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: SubjectLike,
    @Req() request: Request,
  ) {
    try {
      if ((request.headers as any).authorization) {
        const accountId = await getAccountId(
          (request.headers as any).authorization,
        );
        const accountDetail = await getAccountDetail(
          (request.headers as any).authorization,
        );

        return await this.base.createOneBase(req, {
          ...dto,
          created_by_id: accountId,
          meta_created_by: accountDetail,
        } as any);
      } else {
        throw new UnauthorizedException();
      }
    } catch (err) {
      throw new HttpException(err.message || err.response, err.status);
    }
  }

  @Override()
  async createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<SubjectLike>,
    @Req() request: Request,
  ) {
    try {
      if ((request.headers as any).authorization) {
        const accountId = await getAccountId(
          (request.headers as any).authorization,
        );
        const accountDetail = await getAccountDetail(
          (request.headers as any).authorization,
        );

        const newDto = {
          bulk: [],
        };

        newDto.bulk = dto.bulk.map((item) => {
          return {
            ...item,

            created_by_id: accountId,
            meta_created_by: accountDetail,
          };
        });

        return await this.base.createManyBase(req, newDto);
      } else {
        throw new UnauthorizedException();
      }
    } catch (err) {
      throw new HttpException(err.message || err.response, err.status);
    }
  }
}

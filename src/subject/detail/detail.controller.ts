import {
  Controller,
  Get,
  HttpException,
  Req,
  Request,
  UnauthorizedException,
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
import { SubjectDetail } from './detail.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SubjectDetailService } from './detail.service';
import { getAccountDetail, getAccountId } from '../../utils/auth';

@Crud({
  model: {
    type: SubjectDetail,
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
})
@ApiTags('SubjectDetail')
@Controller('subject_detail')
@ApiBearerAuth()
export class SubjectDetailController implements CrudController<SubjectDetail> {
  constructor(public service: SubjectDetailService) {}

  get base(): CrudController<SubjectDetail> {
    return this;
  }

  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: SubjectDetail,
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
    @ParsedBody() dto: CreateManyDto<SubjectDetail>,
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

  @Get('custom/getAverage')
  async getAverage() {
    try {
      return await this.service.getAverage();
    } catch (err) {
      throw new HttpException(err.message || err.response, err.status);
    }
  }
}

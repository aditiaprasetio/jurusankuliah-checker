import {
  Controller,
  HttpException,
  Req,
  UnauthorizedException,
  Request,
} from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Department } from './department.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DepartmentService } from './department.service';
import { getAccountId } from '../utils/auth';

@Crud({
  model: {
    type: Department,
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
      university: {
        eager: true,
      },
      department_family: {
        eager: true,
      },
    },
  },
})
@ApiTags('Department')
@Controller('department')
@ApiBearerAuth()
export class DepartmentController implements CrudController<Department> {
  constructor(public service: DepartmentService) {}

  get base(): CrudController<Department> {
    return this;
  }

  @Override()
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Department,
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

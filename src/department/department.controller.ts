import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Department } from './department.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DepartmentService } from './department.service';

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
}

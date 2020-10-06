import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { DepartmentFamily } from './departmentFamily.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DepartmentFamilyService } from './departmentFamily.service';

@Crud({
  model: {
    type: DepartmentFamily,
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
})
@ApiTags('DepartmentFamily')
@Controller('departmentfamily')
@ApiBearerAuth()
export class DepartmentFamilyController
  implements CrudController<DepartmentFamily> {
  constructor(public service: DepartmentFamilyService) {}

  get base(): CrudController<DepartmentFamily> {
    return this;
  }
}

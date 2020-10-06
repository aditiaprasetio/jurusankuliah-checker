import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { DeptFamilySubject } from './deptfamilysubject.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DeptFamilySubjectService } from './deptfamilysubject.service';

@Crud({
  model: {
    type: DeptFamilySubject,
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
})
@ApiTags('DeptFamilySubject')
@Controller('deptfamilysubject')
@ApiBearerAuth()
export class DeptFamilySubjectController
  implements CrudController<DeptFamilySubject> {
  constructor(public service: DeptFamilySubjectService) {}

  get base(): CrudController<DeptFamilySubject> {
    return this;
  }
}

import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { SubjectDetail } from './detail.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SubjectDetailService } from './detail.service';

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
}

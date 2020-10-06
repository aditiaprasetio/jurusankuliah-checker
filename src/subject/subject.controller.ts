import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Subject } from './subject.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SubjectService } from './subject.service';

@Crud({
  model: {
    type: Subject,
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
})
@ApiTags('Subject')
@Controller('subject')
@ApiBearerAuth()
export class SubjectController implements CrudController<Subject> {
  constructor(public service: SubjectService) {}

  get base(): CrudController<Subject> {
    return this;
  }
}

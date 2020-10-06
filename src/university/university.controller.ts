import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { University } from './university.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UniversityService } from './university.service';

@Crud({
  model: {
    type: University,
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
      departments: {
        eager: true,
      },
    },
  },
})
@ApiTags('University')
@Controller('university')
@ApiBearerAuth()
export class UniversityController implements CrudController<University> {
  constructor(public service: UniversityService) {}

  get base(): CrudController<University> {
    return this;
  }
}

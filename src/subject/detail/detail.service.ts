import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectDetail } from './detail.entity';

@Injectable()
export class SubjectDetailService extends TypeOrmCrudService<SubjectDetail> {
  constructor(@InjectRepository(SubjectDetail) repo) {
    super(repo);
  }

  async getAverage() {
    try {
      const list = await this.repo.find({
        relations: ['subject'],
      });

      const reduce = list.reduce((res: any[], obj: SubjectDetail) => {
        if (res.find((item) => item.id === obj.subject_id)) {
          res = res.map((item) => {
            if (item.id === obj.subject_id) {
              item.data.push({ hafalan: obj.hafalan, analisis: obj.analisis });
            }
            return item;
          });
        } else {
          res.push({
            id: obj.subject.id,
            name: obj.subject.name,
            data: [{ hafalan: obj.hafalan, analisis: obj.analisis }],
          });
        }
        return res;
      }, []);

      const listAverage = reduce.map((item) => {
        let totalHafalan = 0;
        let totalAnalisis = 0;
        let count = 0;

        if (item.data.length > 0) {
          for (const data of item.data) {
            totalHafalan += data.hafalan;
            totalAnalisis += data.analisis;
            count++;
          }

          return {
            ...item,
            avg_hafalan: totalHafalan / count,
            avg_analisis: totalAnalisis / count,
          };
        } else {
          return {
            ...item,
            avg_hafalan: 50,
            avg_analisis: 50,
          };
        }
      });

      return listAverage;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

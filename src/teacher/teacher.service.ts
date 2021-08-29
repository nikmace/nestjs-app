import { Injectable } from '@nestjs/common';

import { teachers } from '../db';
import { FindTeacherResponseDTO } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  getTeachers(): FindTeacherResponseDTO[] {
    return this.teachers;
  }

  getTeacherByID(teacherId: string): FindTeacherResponseDTO {
    return this.teachers.find((teacher) => teacher.id === teacherId);
  }
}

import {
  StudentResponseDTO,
  FindStudentResponseDTO,
} from './../student/dto/student.dto';
import { Controller, Get, Put, Param } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentsService: StudentService) {}

  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDTO[] {
    return this.studentsService.getStudentsByTeacherID(teacherId);
  }

  @Put('/:studentsId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDTO {
    return this.studentsService.updateStudentTeacher(teacherId, studentId);
  }
}

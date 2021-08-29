import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get all students that belong to a teacher';
  }

  @Put('/:studentsId')
  updateStudentTeacher() {
    return 'Update student teacher';
  }
}

import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return { type: 'Student', name: 'John', age: 17 };
  }

  @Get('/:studentId')
  getStudentByID() {
    return 'Get student by id';
  }

  @Post()
  createStudent() {
    return 'Create Student';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'Update Student by Id';
  }
}

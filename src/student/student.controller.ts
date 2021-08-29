import { StudentService } from './student.service';
import {
  CreateStudentDTO,
  UpdateStudentDTO,
  FindStudentResponseDTO,
  StudentResponseDTO,
} from './dto/student.dto';
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentResponseDTO[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentByID(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDTO {
    return this.studentService.getStudentByID(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDTO): FindStudentResponseDTO {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDTO,
  ): StudentResponseDTO {
    return this.studentService.updateStudent(body, studentId);
  }
}

import { StudentTeacherController } from './../teacher/student.controller';
import { TeacherController } from './../teacher/teacher.controller';
import { StudentController } from './../student/student.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
})
export class AppModule {}

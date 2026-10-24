import { Controller, Get, Param, Post, Put, Patch, Delete, Body } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
 @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }

@Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.courseService.getCourseById(id);
  }

@Post()
  createCourse(@Body() dto: CreateCourseDto) {
    return this.courseService.createCourse(dto);
  }

 @Put(':id')
  updateCourse(
    @Param('id') id: string,
    @Body() dto: CreateCourseDto,
  ) {
    return this.courseService.updateCourse(id, dto);
  }

 @Patch(':id')
  patchCourse(
    @Param('id') id: string,
    @Body() dto: UpdateCourseDto,
  ) {
    return this.courseService.patchCourse(id, dto);
  }

 @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(id);
  }


}




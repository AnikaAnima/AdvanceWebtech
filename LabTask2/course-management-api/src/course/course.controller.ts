import { Controller, Get, Param, Post, Put, Patch, Delete, Body, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { promises as fs } from 'fs';

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

  @Post('upload-profile-pic')
@UseInterceptors(
  FileInterceptor('file',{

  }),
)

async uploadProfilePic(
  @UploadedFile(
    new ParseFilePipe({
      validators:[
        new MaxFileSizeValidator({
          maxSize: 1024*1024*7,
        }),
        new FileTypeValidator({
          fileType: /image\/jpeg/,

        }),
      ],

    }),
  )
  file: Express.Multer.File,
) {
    const fileName = Date.now() + file.originalname;
    const path = `./uploads/${fileName}`;
    await fs.writeFile(path, file.buffer);

    console.log(file.originalname);
    console.log(file.mimetype);
    console.log(file.size);
  }

}








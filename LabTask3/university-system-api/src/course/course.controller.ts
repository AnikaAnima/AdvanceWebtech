import { Body, Controller,Get, Param ,Post} from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
 

  //Create Course commit1

  /////commit2
  @Get()
  getAllCourses(){
    return this.courseService.getAllCourses();
  }//end commit2


  ///commit3
  @Get(":id")
  getCourseById(@Param("id") id:string){
    return this.courseService.getCourseById(id);
  }//end commit3

  @Post()///commit4
  createCourse(@Body("name") name:string, @Body("code") code:string){
    return this.courseService.createCourse(name,code);
  }//end commit4


}

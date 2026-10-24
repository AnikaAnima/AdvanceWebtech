import { Body, Controller,Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';

@Controller('enrollment')
export class EnrollmentController {

  
  constructor(private readonly enrollmentService: EnrollmentService) {}

 

  //  //Create Course commit5


  @Get()//commit6
  getEnrollments(){
    return this.enrollmentService.getEnrollments();
  }

  //end commit6


  //commit7
  @Post() 
  enrollStudent(@Body("studentName") studentName:string,
                @Body("courseId") courseId:string){
                  return this.enrollmentService.enrollStudent(studentName,courseId);
                }

                //end commit7
  

  
}

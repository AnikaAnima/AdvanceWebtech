import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';

@Injectable()
export class EnrollmentService {
  //commit7
  constructor(
    private readonly courseService: CourseService, //){}

    //end commit7
    @Inject(forwardRef(() => NotificationService))
    private readonly notificationService: NotificationService

  ){}

  //commit6
  getEnrollments(){
    return{message: 'All enrollments fetched', data: [] }
  }  

  //end commit6

  //commit7

  enrollStudent(studentName: string, courseId: string){

    const course = this.courseService.getCourseById(courseId);
    const notification = this.notificationService.sendNotification(studentName,
      'You have successfully enrolled in the course')
    return {
      message: "Student enrolled Successfully",
            student: studentName,
            course: course,
            notification: notification      
    }
  }
//end commit7
    
}

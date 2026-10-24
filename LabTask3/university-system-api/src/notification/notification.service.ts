import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

@Injectable()
export class NotificationService {
//commit 10
    constructor(
        @Inject(forwardRef(() => EnrollmentService))
        private readonly enrollmentService: any){}

        //end commit10
    
//commit 9
    sendNotification(studentName: string, message: string){
        return{
            message: 'Notification sent successfully',
            student: studentName,
            notification: message
        }
    
    }

    //end commit9

    //commit10
    checkEnrollmentAndNotify(studentName: string, courseId: string){
        const enrollments = this.enrollmentService.getEnrollments();
        return{
            message: 'Enrollment checked successfully',
            student: studentName,
            courseId: courseId,
            enrollments: enrollments

        }
    }

    //end commit 10
}

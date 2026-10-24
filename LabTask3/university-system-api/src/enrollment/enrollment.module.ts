import { forwardRef, Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';
import { EnrollmentController } from './enrollment.controller.js';
import { CourseModule } from '../course/course.module.js';
import { NotificationModule } from '../notification/notification.module.js';

@Module({

  //commit6
  imports:[CourseModule,
   //end commit6
   
   //commit9
    forwardRef(() => NotificationModule)],

    //end commit 9
  controllers: [EnrollmentController],
  providers: [EnrollmentService],

  //commit6
  exports: [EnrollmentService],

  //end commit6
})
export class EnrollmentModule {}

import { Body, Controller,Post } from '@nestjs/common';
import { NotificationService } from './notification.service.js';

@Controller('notification')
export class NotificationController {
  
  constructor(private readonly notificationService: NotificationService) {}


   //  //Create Course commit8

   

//commit9
  @Post("send")
  sendNotification(@Body("studentName") studentName:string,
                   @Body("message") message:string){
                    return this.notificationService.sendNotification(studentName,message);
                   }

                   //end commit9

@Post("check") //commit10
checkEnrollmentAndNotify(@Body("studentName") studentName:string,
                         @Body("courseId") courseId:string){
                          return this.notificationService.checkEnrollmentAndNotify(studentName,courseId);
                         }
                         //end commit 10

}

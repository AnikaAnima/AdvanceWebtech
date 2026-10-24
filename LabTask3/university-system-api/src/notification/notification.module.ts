import { forwardRef, Module } from '@nestjs/common';
import { NotificationService } from './notification.service.js';
import { NotificationController } from './notification.controller.js';
import { EnrollmentModule } from '../enrollment/enrollment.module.js';

@Module({
//commit9
  imports: [forwardRef(() => EnrollmentModule)],

  //end commit9
  controllers: [NotificationController],
  providers: [NotificationService],

  //commit9
  exports: [NotificationService],

  //end commit9
})
export class NotificationModule {}

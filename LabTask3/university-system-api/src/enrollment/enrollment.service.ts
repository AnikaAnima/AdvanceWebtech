import { Injectable } from '@nestjs/common';

@Injectable()
export class EnrollmentService {

  getEnrollments(){
    return{ message: 'All enrollments fetched', data: []}
  }
  
  

    
}

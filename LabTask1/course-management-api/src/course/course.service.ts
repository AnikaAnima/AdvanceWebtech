import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses():any{
    return {id:1};
} 
getCourseById(id:string):any{
    return {id:id};
}
createCourse():any{
    return {message:"Course Created"};
}
updateCourse(id:number):any{
    return {id:id};
}
patchCourse(id:string):any{
    return {id:id};
}
deleteCourse(id:string):any{
    return {id:id}
}
}




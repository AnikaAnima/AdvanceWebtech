import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    /////commit2
    getAllCourses(){
        return { message: 'All courses fetched', data: [] }
    }//end commit2


    ///commit3
    getCourseById(id: string){
        return { message: 'Course fetched', id }
    }//end commit3

    /////commit4
    createCourse(name: string, code: string){
        return {
            message: 'Course created', 
            data: { name, code }
        }
    }//end commit4
}

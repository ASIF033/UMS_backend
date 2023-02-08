import { Injectable } from "@nestjs/common/decorators";
import { AdminForm } from "./app.AdminForm.dto";
import { CourseForm } from "./app.CourseForm.dto";
import { AssignedFacultyForm } from "./app.AssignedFacultyForm.dto";

@Injectable()
export class AdminService {

getIndex():string { 
    return "Admin Index"; 

}
getUserByID(id):any {
    
    return "the id is "+id;
}

getUserByIDName(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.name;
}

insertUser(mydto:AdminForm):any {
    
        return "Admin Inserted name: " + mydto.name+" and id is " + mydto.id;
    }

updateUser(name,id):any {
        return "Admin updated name: " +name+" and id is " +id;
    }
updateUserbyid(name,id):any {
        return "Update admin where id " +id+" and change name to " +name;
    }
    deleteUserbyid(id):any {
    
        return "Delete id is "+id;
    }
assignCourse(mydto:CourseForm):any
{
        return "Assigned course title: "+ mydto.title+ " Day: "+mydto.day+ " Time: "+mydto.time+ " Room No: "+mydto.roomno;
}
getCoursesByTitle(qry):any {
    
    return "The Course title is: "+qry.title +" , day is: "+qry.day+" , time is: "+qry.time+" , room no is: "+qry.roomno;
}
updateCoursebytitle(title,day,time,roomno):any 
{
    return "Update course where title: " +title+" and change day: " +day+ " time: "+time+" and roomno: "+roomno;
    
  }
  deleteCoursebytitle(title):any {
    
    return "Canceled course is: "+title;
}
assignFaculty(mydto: AssignedFacultyForm):any
{
        return "Assigned faculty for the course "+ mydto.coursename+ " is: "+mydto.facultyname;
}
}
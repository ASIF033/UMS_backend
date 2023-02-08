import { Injectable } from "@nestjs/common/decorators";
import { StudentForm } from "./app.StudentForm.dto";



@Injectable()
export class StudentService {

getIndex():string { 
    return "Student Index"; 

}
getUserByID(id: string | number):any {
    
    return "the id is "+id;
}

getUserByIDName(qry: { id: string; fullname: string; address: string; CGPA: string; }):any {
    
    return "the id is "+qry.id +" and name is "+qry.fullname+ "address is" +qry.address+"CGPA is"+qry.CGPA;;
}

insertUser(mydto:StudentForm):any {
    
        return "Student Inserted name: " + mydto.fullname+" and id is: " + mydto.id+ "address is: "+mydto.address+"CGPA is: "+mydto.CGPA;
    }

updateUser(id: string | number,fullname: string,address: string,CGPA: string):any {
        return "Student updated name: " +fullname+" and id is " +id + "address is"+address+"CGPA is"+CGPA;
    }
updateUserbyid(fullname: string | number,id: string,address: string,CGPA: string):any {
        return "Update student where id " +fullname+" and change name to " +id + "address is"+address+" CGPA is " +CGPA;
    }
    deleteUserbyid(id: string | number):any {
    
        return "Delete id is "+id;
    }
    

}
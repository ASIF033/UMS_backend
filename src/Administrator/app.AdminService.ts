import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from "./adminentity.entity";
import { AdminForm } from "./app.AdminForm.dto";
import { CourseForm } from "./app.CourseForm.dto";
import { AssignedFacultyForm } from "./app.AssignedFacultyForm.dto";
import { AdminFormUpdate } from "./AdminFormUpdate.dto";
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer/dist";
import { HttpException, HttpStatus } from "@nestjs/common";
@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
        private mailerService: MailerService
      ) {}

getIndex():any { 
    return this.adminRepo.find(); 

}
async getUserByID(id) {
    const data=await this.adminRepo.findOneBy({ id });
    console.log(data);
    if(data!==null) {
        return data;
    }
   else 
   {
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
   }
}

getUserByIDName(qry):any {
    
    return this.adminRepo.findOneBy({ id:qry.id,name:qry.name });
}

getUserIDByEmail(email){
    
    return this.adminRepo.findOneBy({email:email});

}



async insertUser(mydto) {
    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(mydto.password, salt);
    mydto.password= hassedpassed;
     return this.adminRepo.save(mydto);
    }


    updateUser(name,email):any {
        console.log("ID : "+ this.getUserIDByEmail(email));
        console.log("Email: " + email);
        return this.adminRepo.update({email:email},{name:name});
        }
    updateUserbyid(mydto:AdminFormUpdate,id):any {
    return this.adminRepo.update(id,mydto);
    }

    async updateUserByEmail(mydto){
        const user = await this.getUserIDByEmail(mydto.email);
        return this.updateUserbyid(mydto,user.id);
    }
    deleteUserbyid(id):any {
    
        return this.adminRepo.delete(id);
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
        return "Assigned faculty for the course "+ mydto.coursename+ " is: "+mydto.facultyname+ " faculty email: "+mydto.email;
}


async signup(mydto) {
    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(mydto.password, salt);
    mydto.password= hassedpassed;
    return this.adminRepo.save(mydto);
    }
    
async signin(mydto){
   
   if (mydto.email != null && mydto.password != null) {
            const mydata = await this.adminRepo.findOneBy({ email: mydto.email });
            const isMatch = await bcrypt.compare(mydto.password, mydata.password);
            if (isMatch) {
                return true;
            }
            else {
                return false;
            }
        } else {
            return false;
        }
       
    }
    
    
async sendEmail(mydata){
    return   await this.mailerService.sendMail({
           to: mydata.email,
           subject: mydata.subject,
           text: mydata.text, 
         });
   
   }
}




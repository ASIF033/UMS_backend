import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminForm } from "./app.AdminForm.dto";
import { CourseForm } from "./app.CourseForm.dto";
import { AssignedFacultyForm } from "./app.AssignedFacultyForm.dto";
import { AdminService } from "./app.AdminService";


@Controller("/admin")
export class AdminController
{ 
  constructor(private adminService: AdminService){}

  @Get("/index")
    getAdmin(): any { 
        return this.adminService.getIndex();
    }
    @Get("/finduser/:id")
    getUserByID(@Param("id", ParseIntPipe) id:number,): any {
      return this.adminService.getUserByID(id);
    }


    @Get("/finduser")
    getUserByIDName(@Query() qry:any): any {
      return this.adminService.getUserByIDName(qry);
    }  
    @Post("/insertuser")
    @UsePipes(new ValidationPipe())
    insertUser(@Body() mydto:AdminForm): any {
      return this.adminService.insertUser(mydto);
    }
  
    @Put("/updateuser/")
    @UsePipes(new ValidationPipe())
    updateUser( 
      @Body("name") name:string, 
      @Body("id") id:number
      ): any {
    return this.adminService.updateUser(name, id);
    }
    
    @Put("/updateuser/:id")
  updateUserbyid( 
      @Body("name") name:string, 
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.adminService.updateUserbyid(name,id);
    }

    @Delete("/deleteuser/:id")
  deleteUserbyid( 
     @Param("id", ParseIntPipe) id:number
      ): any {
    return this.adminService.deleteUserbyid(id);
    }
    @Post("/assigncourse")
    @UsePipes(new ValidationPipe())
    assignCourse(@Body() mydto:CourseForm): any {
     /*
*/
      return this.adminService.assignCourse(mydto);
      }

      @Put("/updatecourse/:title")
  updateCoursebytitle( 
    @Body("title") title:string,
      @Body("day") day:string,
      @Body("time") time:string,
      @Body("roomno") roomno:string
  ): any{
    return this.adminService.updateCoursebytitle(title,day,time,roomno)
   }

   @Delete("deletecourse/:title")
   deleteCoursebytitle( 
      @Body("title") title:string,
       ): any {
     return this.adminService.deleteCoursebytitle(title);
     }

     @Get("/findcourse")
     getCoursesByTitle(@Query() qry:any): any {
       return this.adminService.getCoursesByTitle(qry);
     }

     @Post("/assignfaculty")
    @UsePipes(new ValidationPipe())
    assignFaculty(@Body() mydto:AssignedFacultyForm): any {
      return this.adminService.assignFaculty(mydto);
    }
}
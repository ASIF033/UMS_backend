import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { StudentForm } from "./app.StudentForm.dto";
import { StudentService } from "./app.StudentService";



@Controller("/student")
export class StudentController
{ 
  constructor(private studentService: StudentService){}

  @Get("/index")
    getAdmin(): any { 
        return this.studentService.getIndex();
    }
    @Get("/findstudent/:id")
    getUserByID(@Param("id", ParseIntPipe) id:number,): any {
      return this.studentService.getUserByID(id);
    }


    @Get("/findstudent")
    getUserByIDName(@Query() qry:any): any {
      return this.studentService.getUserByIDName(qry);
    }  
    @Post("/insertstudent")
    @UsePipes(new ValidationPipe())
    insertUser(@Body() mydto:StudentForm): any {
      return this.studentService.insertUser(mydto);
    }
  
    @Put("/updatestudent/")
    @UsePipes(new ValidationPipe())
    updateUser( 
     
      @Body("id") id:number,
      @Body("fullname") fullname:string, 
      @Body("adress") address:string, 
      @Body("CGPA") CGPA:string, 
      
      ): any {
    return this.studentService.updateUser(id,fullname,address,CGPA);
    }
    
    @Put("/updatestudent/:id")
    updateUserbyid( 

        @Body("fullname") fullname:string, 
        @Body("address") address:string, 
        @Body("CGPA") CGPA:string, 
  
        @Param("id", ParseIntPipe) id:number
        ): any {
      return this.studentService.updateUserbyid(id,fullname,address,CGPA);
      }

    @Delete("/deletestudent/:id")
  deleteUserbyid( 
     @Param("id", ParseIntPipe) id:number
      ): any {
    return this.studentService.deleteUserbyid(id);
    }

}
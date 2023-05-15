import { Body, Controller, DefaultValuePipe, FileTypeValidator, MaxFileSizeValidator,ParseFilePipe,UploadedFile,UseInterceptors,Session,UseGuards ,Delete, Get, Param, ParseIntPipe, Post, Put, Query,  UsePipes, ValidationPipe, Res, Req, Header, HttpCode } from "@nestjs/common";


import { AdminForm } from "./app.AdminForm.dto";
import { CourseForm } from "./app.CourseForm.dto";
import { AssignedFacultyForm } from "./app.AssignedFacultyForm.dto";
import { AdminService } from "./app.AdminService";
import { AdminFormUpdate } from "./AdminFormUpdate.dto";
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SessionGuard } from "./adminsession.guard";
//import { CourseFormService } from "./app.CourseFormService";


@Controller("/admin")
export class AdminController
{ 
  constructor(private adminService: AdminService,
    /*private courseFormService: CourseFormService*/){}

  @Get("/index")
    getAdmin(): any { 
        return this.adminService.getIndex();
    }
    @Get("/finduser/:id")
    getUserByID(@Param("id", ParseIntPipe) id:number,): any {
      return this.adminService.getUserByID(id);
    }
    @Get("/finduserbyemail/:email")
    getUserIDByEmail(@Param("email") email:String,): any {
      email = email+"@gmail.com";
      console.log("Search:"+email);
      return this.adminService.getUserIDByEmail(email);
    }


    @Get("/finduser")
    getUserByIDName(@Query() qry:any): any {
      return this.adminService.getUserByIDName(qry);
    }  
    @Post('/insertuser')
  @UseInterceptors(FileInterceptor('myfile',
  {storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })
  }))
  insertUser(@Body() mydto:AdminForm,@UploadedFile(  new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 160000 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) file: Express.Multer.File){
  
  mydto.filename = file.filename;  
  console.log(mydto)
  return this.adminService.insertUser(mydto);
  }
    @Get('/getimage/:name')
  getImages(@Param('name') name, @Res() res) {
    res.sendFile(name,{ root: './uploads' })
  }
    @Put("/updateuser")
     //@UseGuards(SessionGuard)
    //@UsePipes(new ValidationPipe())
    updateAdmin(@Session() session,@Body() mydto: AdminForm): any {
      console.log("email: "+mydto.email);
      return this.adminService.updateUserByEmail(mydto);
    }
    
    @Put("/updateuser/:id")
    @UseGuards(SessionGuard)
     updateUserbyid( 
      @Body() mydto: AdminFormUpdate,
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.adminService.updateUserbyid(mydto,id);
    }

    @Delete("/deleteuser/:id")
  deleteUserbyid( 
     @Param("id", ParseIntPipe) id:number
      ): any {
    return this.adminService.deleteUserbyid(id);
    }
    /*@Post("/assigncourse")
    @UsePipes(new ValidationPipe())
    assignCourse(@Body() mydto:CourseForm): any {
 
      return this.courseFormService.assignCourse(mydto);
      }

      

   @Delete("deletecourse/:id")
   deleteCoursebytitle( 
    @Param("id", ParseIntPipe) id:number
    ): any {
     return this.courseFormService.deleteCoursebytitle(id);
     }

     @Get("/findcourse")
     getCoursesById(@Param("id", ParseIntPipe) id:number,): any {
       return this.courseFormService.getCoursesById(id);
     }

     @Post("/assignfaculty")
    @UsePipes(new ValidationPipe())
    assignFaculty(@Body() mydto:AssignedFacultyForm): any {
      return this.adminService.assignFaculty(mydto);
    }
*/
   
    
@Post('/signup')
@UseInterceptors(FileInterceptor('myfile',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
signup(@Body() mydto:AdminForm,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 16000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

mydto.filename = file.filename;  

return this.adminService.signup(mydto);
console.log(file)
}
@Post('/signin')
@UsePipes(new ValidationPipe())
async signin(@Session() session, @Body() mydto:AdminForm)
{
  const res = await (this.adminService.signin(mydto));
if(res==true)
{
  console.log("signin: "+mydto.email);
session.email = mydto.email;
return (session.email);
}
else
{
throw new UnauthorizedException({ message: "invalid credentials" });
}
}
@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"LOGGED OUT SUCCESSFULLY"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}

@Post('/sendemail')
sendEmail(@Body() mydata){
return this.adminService.sendEmail(mydata);
}
}
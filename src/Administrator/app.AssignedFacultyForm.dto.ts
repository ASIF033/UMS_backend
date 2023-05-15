import { IsString, Matches, IsEmail, IsNotEmpty, Length } from "class-validator";


export class AssignedFacultyForm {   
    @IsNotEmpty({message: "Please enter Course Titile!"})
    @IsString()
    
    @Length(5,50)
    coursename: string;

    @IsNotEmpty({message: "Please enter Faculty Name!"})
    @IsString()
    
    @Length(3,50)
    facultyname: string;

    @IsEmail()
    email: string;

}
import { IsNotEmpty, IsString, Length, Matches } from "class-validator";


export class CourseForm {   
    
    @IsNotEmpty({message: "Please enter Course Titile!"})
    @IsString()
    @Length(5,50)
    title: string;

    @Length(1,2)
    @IsNotEmpty({message: "Please enter Day!"})
    @IsString()
    day: string;

    @IsNotEmpty({message: "Please enter Time!"})
    time: string;

    @IsNotEmpty({message: "Please enter Room No!"})
    @IsString()
    roomno: string;

}
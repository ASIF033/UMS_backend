
import { IsInt, IsNotEmpty } from "class-validator";

export class StudentForm {   
    @IsNotEmpty({message: "Please enter student's id"}) 
    @IsInt()
    id: number;
   

    @IsNotEmpty({message: "Please give student's information"})
    
  
  
  fullname:string;
  address:string;
  CGPA:string;
 


}
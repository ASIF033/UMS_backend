import { IsEmail, IsInt, IsNotEmpty, IsString, Length } from "class-validator";

export class AdminForm {   
    //@IsNotEmpty({message: "Please enter your id"}) 
    //@IsInt()
    id: number;

  
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;


   // @IsString()
    filename: string;
     
}

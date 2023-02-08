import { IsInt, IsNotEmpty, Length } from "class-validator";

export class LibrarianForm {   
    @IsNotEmpty({message: "Please enter your BookID"}) 
    @IsInt()
    bookid: number;
   

    @IsNotEmpty()
    @Length(3,8)
    bookname: string;
    authorname:string;
    takeinfo:string;

  
   



}
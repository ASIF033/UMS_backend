import { Injectable } from "@nestjs/common/decorators";
import { LibrarianForm } from "./app.LibrarianForm.dto";


@Injectable()
export class LibrarianService {

getIndex():string { 
    return "Book Index"; 

}
getUserByID(bookid):any {
    
    return "the id is "+bookid;
}

getUserByIDName(qry):any {
    
    return "the id is "+qry.bookid +" and name is "+qry.bookname+ " author name is "+  qry.authorname+" take info " + qry.takeinfo;
}

insertUser(mydto:LibrarianForm):any {
    return "BOOK Inserted name: " + mydto.bookname+" and id is " + mydto.bookid+ " author name is "+  mydto.authorname+" take info " +mydto.takeinfo;  
    }


updateUser(bookname,bookid,authorname,takeinfo):any {
    return "BOOK updated name: " +bookname+" and id is " +bookid+ " author name is "+  authorname+" take info " +takeinfo;
     }


        updateUserbyid(bookname,bookid,authorname,takeinfo):any {
            return "Update book where id " +bookid+" and change name to " +bookname+" authorname is "+  authorname+ " take info " +takeinfo;
    }
    deleteUserbyid(bookid):any {
    
        return "Delete id is "+bookid;
    }
    

}
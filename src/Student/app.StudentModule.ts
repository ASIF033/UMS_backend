import { Module } from "@nestjs/common";
import { StudentService } from "./app.StudentService";
import { StudentController } from "./app.StudentController";

@Module({

controllers: [StudentController],
providers: [StudentService],

})

export class StudentModule {}
import { Module } from "@nestjs/common";
import { LibrarianController } from "./app.LibrarianController";
import { LibrarianService } from "./app.LibrarianService";


@Module({

controllers: [LibrarianController],
providers: [LibrarianService],

})

export class LibrarianModule {}
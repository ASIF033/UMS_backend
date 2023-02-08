import { Module } from "@nestjs/common";
import { AdminController } from "./app.AdministratorController";
import { AdminService } from "./app.AdminService";

@Module({

controllers: [AdminController],
providers: [AdminService],

})

export class AdminModule {}
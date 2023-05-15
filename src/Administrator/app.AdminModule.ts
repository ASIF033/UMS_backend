import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from "./app.AdministratorController";
import { AdminEntity } from "./adminentity.entity"
import { AdminService } from "./app.AdminService";
import { MailerModule } from "@nestjs-modules/mailer";

@Module({

    imports: [ MailerModule.forRoot({
        transport: {
          host: 'smtp.gmail.com',
                   port: 465,
                   ignoreTLS: true,
                   secure: true,
                   auth: {
                       user: 'hasanasif503@gmail.com',
                       pass: 'narhboagrgwwvhbn'
                   },
                  }
      }),
        
        TypeOrmModule.forFeature([AdminEntity])],

controllers: [AdminController],
providers: [AdminService],

})

export class AdminModule {}
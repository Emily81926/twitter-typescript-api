import { Controller, Get } from "@nestjs/common"

import { AdminService } from "./admin.service"

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  
  //取得所有tweets貼文
  @Get()
  getTweets(): any {
    return this.adminService.getTweets()
  }
}

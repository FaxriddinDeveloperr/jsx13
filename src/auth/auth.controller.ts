import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport"; 

@Controller('auth')
export class AuthController{
    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(){}

    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req:any){
        return req.user;
    }


    



}
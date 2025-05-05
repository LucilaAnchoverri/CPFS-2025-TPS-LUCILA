import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tracks')
export class AppController {
  
  constructor(private readonly tracksService:AppService){}
  
      @Get('get')
      getTracks(){
          return this.tracksService.getTracks();
      }
      
      @Get(':id')
      getById(@Param('id') id:string){
          return this.tracksService.getById(id);
      }
  
      @Post('crear')
      create(@Body() track:any){
        return this.tracksService.crearTracks(track);
      }
  
      @Put(':id')
      update(@Param('id') id:string,@Body() body:any){
          return this.tracksService.actualizarTracks(id, body)
      }
  
      @Delete(':id')
      delete(@Param('id') id:string){
          return this.tracksService.eliminarTracks(id);
      }
}

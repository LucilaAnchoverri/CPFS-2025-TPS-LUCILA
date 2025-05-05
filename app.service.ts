import { Injectable } from '@nestjs/common';
import { error } from 'console';

@Injectable()
export class AppService {
   
    async getTracks() {
      try{
      let respuesta = await fetch('http://localhost:3030/tracks');
      let datos = await respuesta.json();
    return datos;
      }catch{
        console.error("no se pudo obtener la lista de canciones")
      }
    
  }
  
  async getById(id:string){
    try{
    let respuesta = await fetch('http://localhost:3030/tracks/' + id);
    let datos = await respuesta.json();
    return datos;
    }catch{
      console.error("no se pudo obtener la cancion")
    }
  }

  async crearTracks(track: any){
    try{
    let respuesta = await fetch('http://localhost:3030/tracks',
        {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(track)
      })
    return respuesta;
    }catch{
      console.error("no se pudo crear la cancion")
    }
  }

  async actualizarTracks(id:string, body:any){
    try{
    let respuesta = await fetch('http://localhost:3030/tracks/' + id,
    {
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
  return respuesta;
    }catch{
      console.error("no se pudo actualizar la cancion")
    }
  }

  async eliminarTracks(id:string){
    try{
    let respuesta = await fetch('http://localhost:3030/tracks/' + id,
    {
      method:'DELETE'
    })
    return respuesta;

    }catch{
      console.error("no se pudo eliminar la cancion")
    }
  }
}

import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';


/*Service
    Agregar un bloque try / catch en cada método que sea necesario.
    En cada catch, implementá manejo adecuado de errores usando:
    HttpException o subclases como NotFoundException, BadRequestException, ConflictException, etc. */
@Injectable()
export class TracksService {

    private baseUrl = 'http://localhost:3001/tracks/';

    //hecho por el profe
    async getAll(){
        try{                   
            const response = await fetch(this.baseUrl);

            if(!response.ok)//errores esperables del servidor (404)
                throw new NotFoundException('No se encontraron tracks en esa url');       
       
            const data = await response.json();
            return data;
        } catch(err){//si existe otro error no contemplado
            if(err instanceof NotFoundException){
                //si el error que se lanzo fue un NotFoundException, entonces volves a lanzar otro igual
                //para que devuelva al view el mismo tipo
                throw new NotFoundException('No se encontraron tracks en esa url');
            }
            throw new Error('Fallo el metodo getAll()')
        }

    }
    
    async getOne(id:number){
        try{
            console.log(this.baseUrl + id);
            const response = await fetch(this.baseUrl + id);

            if(!response.ok){
                throw new NotFoundException('No se encontraron tracks con ese id');
            }
            const data = await response.json();
            return data;
        }catch(error){
            if(error instanceof NotFoundException){
                throw error;
            }
            throw new Error('Fallo el metodo getOne');
        }
    }

    async create(track:any){
        try{
            const response = await fetch(this.baseUrl,
            {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(track)
            }
            )
            if(response.status === 409){
                throw new ConflictException('No se creo el track porque ya existe');
            }
            if(!response.ok){
                throw new Error(`Fallo el servidor: ${response.status}`)
            }

            const data = await response.json();
            return data;
        }catch(error){
            if(error instanceof ConflictException){
                throw error;
            }
            throw new Error('Fallo el metodo Create')
        }
       
    }

    async update(id:number,body:any){
        try{
            const response = await fetch(this.baseUrl + "/" + id,
                {
                    method:'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                }
            )

            if(response.status === 400){
                throw new BadRequestException('Enviaste un dato incorrecto al editar el track');
            }
            if(!response.ok){
                throw new Error(`Fallo el servidor: ${response.status}`)
            }
            const data = await response.json();
            return data;
        }catch(error){
            if(error instanceof BadRequestException){
                throw error;
            }
            throw new Error('Fallo el metodo update')
        }

    }

    async delete(id:number){
        try{
        const response = await fetch(this.baseUrl + "/" + id,{
            method:'DELETE'
        })
        if(!response.ok){
            throw new NotFoundException('No existe el track con el id que quieres eliminae')
        }
       
        return response.statusText;
        }catch(error){
            if(error instanceof NotFoundException){
                throw error;
            }
            throw new Error('Fallo el metodo delete')
        }
    }

}

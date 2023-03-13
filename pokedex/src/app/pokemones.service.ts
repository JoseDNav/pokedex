import { Injectable } from '@angular/core';
import { Iresultado } from './interfaces/pokeapi';


@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  constructor() { }

  async getlista(): Promise <Iresultado[]> {
   const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0")

   const resjson = await res.json();

   if(resjson.results.length > 0) return resjson.results

    
   return [];



  }

  async getid(id:string){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const resjson = await res.json();

     
   console
  
    
   



  }
}

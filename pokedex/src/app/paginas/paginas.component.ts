import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { Iresultado } from '../interfaces/pokeapi';
import { PokemonesService } from '../pokemones.service';



  

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.scss']
})
export class PaginasComponent implements OnInit  {

  constructor(private PokemonesServices: PokemonesService) {}

  listapokemon: Iresultado[] = []


  
  ngOnInit(): void {
    this.cargarlista()
    
 
  }

 async cargarlista() {

  this.listapokemon = [...this.listapokemon, ...await this.PokemonesServices.getlista()]
  //console.log(this.listapokemon)
  }





}




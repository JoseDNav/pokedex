import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Iresultado } from '../interfaces/pokeapi';
import { PokemonesService } from '../pokemones.service';




@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnChanges {
  constructor (private pokemones: PokemonesService){}
  
  
  ngOnChanges(): void{
    
    this.extraerinfo()
  }

  @Input() data?: Iresultado
  id:string = "0"
  poke: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  peso: string[] = []
  altura: string[] = []
  tipo: string[] = []
 
  

  extraerinfo() {
    if (this.data) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
  
      this.pokemones.getid(this.id)
        .then(resultado => {
          
         
          this.peso = resultado.height
          this.altura= resultado.weight

         this.tipo= resultado.types[0].type.name
         //this.tipo= resultado.types
        
        

       
       
          
         // console.log(this.tipo.map);
          
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}  

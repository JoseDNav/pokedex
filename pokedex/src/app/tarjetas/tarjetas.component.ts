import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Iresultado } from '../interfaces/pokeapi';
import { PokemonesService } from '../pokemones.service';


interface Ipokemon {
  nombre: string,
  img: string,
  link: string,
  descripcion: string
  }

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

  extraerinfo(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1)

      this.pokemones.getid(this.id);
    }


  }

}

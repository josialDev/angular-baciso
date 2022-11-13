import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombres:string[] = ['Jose', 'Elaine', 'Nicole', 'Laia'];
  eliminados:string[] = [];

  remover():void{
    let eliminado:string  = this.nombres.shift() || 'No hay nombre';
    this.eliminados.push(eliminado)  
  }
}

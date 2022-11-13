import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
        
        <span>{{ title }}</span>
        <button name="sumar" (click)="contador(base)">{{ '+' + base }}</button>
        {{ numero }}
        <button name="restar" (click)="contador(base * -1)">{{ - base }}</button>

    `,
    styles:[`
    button { 
        background-color: black;
        border-radius: 5px;
        border: 0px;
        color: white;
        margin-right: 5px;
        margin-left: 5px;
        padding: 5px 10px;
        cursor:pointer;
        
        }`
    ],
     
})
export class ContadorComponent{
    title = 'Contador App';
    numero:number = 0;
    base:number = 5;

    contador(value:any):void{
    this.numero += value;
    }
}
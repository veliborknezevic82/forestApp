import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unos-podataka',
  templateUrl: './unos-podataka.component.html',
  styleUrls: ['./unos-podataka.component.css']
})
export class UnosPodatakaComponent implements OnInit {

   nadmorskaVisina:number;
   srednjiPrecnikCetinara: number;

   onChangeValue1(event){
     this.nadmorskaVisina = event.target.value;
    }
   onChangeValue2(event){
      this.srednjiPrecnikCetinara = event.target.value;
     }

  constructor() { }

  ngOnInit(): void {
  }

}

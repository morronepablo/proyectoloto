import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  public botonesArray = [
    {
      "id": 0,
      "numero": "00"
    },
    {
      "id": 1,
      "numero": "01"
    },
    {
      "id": 2,
      "numero": "02"
    },
    {
      "id": 3,
      "numero": "03"
    },
    {
      "id": 4,
      "numero": "04"
    },
    {
      "id": 5,
      "numero": "05"
    },
    {
      "id": 6,
      "numero": "06"
    },
    {
      "id": 7,
      "numero": "07"
    },
    {
      "id": 8,
      "numero": "08"
    },
    {
      "id": 9,
      "numero": "09"
    },
    {
      "id": 10,
      "numero": "10"
    },
    {
      "id": 11,
      "numero": "11"
    },
    {
      "id": 12,
      "numero": "12"
    },
    {
      "id": 13,
      "numero": "13"
    },
    {
      "id": 14,
      "numero": "14"
    },
    {
      "id": 15,
      "numero": "15"
    },
    {
      "id": 16,
      "numero": "16"
    },
    {
      "id": 17,
      "numero": "17"
    },
    {
      "id": 18,
      "numero": "18"
    },
    {
      "id": 19,
      "numero": "19"
    },
    {
      "id": 20,
      "numero": "20"
    },
    {
      "id": 21,
      "numero": "21"
    },
    {
      "id": 22,
      "numero": "22"
    },
    {
      "id": 23,
      "numero": "23"
    },
    {
      "id": 24,
      "numero": "24"
    },
    {
      "id": 25,
      "numero": "25"
    },
    {
      "id": 26,
      "numero": "26"
    },
    {
      "id": 27,
      "numero": "27"
    },
    {
      "id": 28,
      "numero": "28"
    },
    {
      "id": 29,
      "numero": "29"
    },
    {
      "id": 30,
      "numero": "30"
    },
    {
      "id": 31,
      "numero": "31"
    },
    {
      "id": 32,
      "numero": "32"
    },
    {
      "id": 33,
      "numero": "33"
    },
    {
      "id": 34,
      "numero": "34"
    },
    {
      "id": 35,
      "numero": "35"
    },
    {
      "id": 36,
      "numero": "36"
    },
    {
      "id": 37,
      "numero": "37"
    },
    {
      "id": 38,
      "numero": "38"
    },
    {
      "id": 39,
      "numero": "39"
    },
    {
      "id": 40,
      "numero": "40"
    },
    {
      "id": 41,
      "numero": "41"
    },
    {
      "id": 42,
      "numero": "42"
    },
    {
      "id": 43,
      "numero": "43"
    },
    {
      "id": 44,
      "numero": "44"
    },
    {
      "id": 45,
      "numero": "45"
    }
  ];
  public apuestaUsuario = [];

  public contador = 0;

  constructor() {

  }



  ngOnInit(): void {

  }

  goBoton(id:any): void {
    let page = document.getElementById(id);
    let inactivo = page.classList.contains("botonActivo");
    if(this.contador >= 0 && this.contador < 6 ) {
      console.log(id);
      console.log(page);
      if(inactivo == false) {
        page.className = "botonActivo";
        this.contador = this.contador + 1;
        this.apuestaUsuario.push(id);
        console.log(this.apuestaUsuario);
      } else {
        page.className = "";
        this.contador = this.contador - 1;
        let apuesta = this.apuestaUsuario.indexOf(id);
        console.log("posicion: ",apuesta);
        this.apuestaUsuario.splice(apuesta,1)
        console.log(this.apuestaUsuario);
      }
      console.log("Contador ",this.contador);
      console.log(inactivo);
    }
    if(this.contador == 6) {
      if(inactivo == true) {
        page.className = "";
        this.contador = this.contador - 1;
        let apuesta = this.apuestaUsuario.indexOf(id);
        console.log("posicion: ",apuesta);
        this.apuestaUsuario.splice(apuesta,1)
        console.log(this.apuestaUsuario);
      }
      console.log("Contador 2",this.contador);
      console.log(inactivo);
    }


    console.log("Contador ",this.contador);

  }


  goPlay(): void {

  }

}

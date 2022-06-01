import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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

  public jackArray = [
    {
      "id": 100,
      "numero": "0"
    },
    {
      "id": 101,
      "numero": "1"
    },
    {
      "id": 102,
      "numero": "2"
    },
    {
      "id": 103,
      "numero": "3"
    },
    {
      "id": 104,
      "numero": "4"
    },
    {
      "id": 105,
      "numero": "5"
    },
    {
      "id": 106,
      "numero": "6"
    },
    {
      "id": 107,
      "numero": "7"
    },
    {
      "id": 108,
      "numero": "8"
    },
    {
      "id": 109,
      "numero": "9"
    }
  ];

  public apuestaUsuario = [];

  public jackUsuario = 0;

  public contador = 0;

  public contadorJack = 0;

  public playStart = false;

  public apuesta = this.goApuestaBase();

  constructor() {

  }

  ngOnInit(): void {
  }

  // Funcion poner ceros a la izquierda
  zfill(number: number, width: number) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */
    var zero = "0"; /* String de cero */

    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString());
        } else {
             return numberOutput.toString();
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString());
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString());
        }
    }
  }

  // Funcion numero aleatorio

  randomNumber(min, max){
    let r = Math.random()*(max-min) + min
    return Math.floor(r)
  }

  // Funcion llamada a apuesta base

  goApuestaBase() {
    let apuestaBase = 130;
    return apuestaBase;
  }

  // Switch para apuestas de 7 a 15 números
  goSwitchApuesta(contador) {
    switch (contador) {
      case 7:
          this.apuesta = this.goApuestaBase() * 7;
        break;
      case 8:
          this.apuesta = this.goApuestaBase() * 28;
        break;
      case 9:
          this.apuesta = this.goApuestaBase() * 84;
        break;
      case 10:
          this.apuesta = this.goApuestaBase() * 210;
        break;
      case 11:
          this.apuesta = this.goApuestaBase() * 462;
        break;
      case 12:
          this.apuesta = this.goApuestaBase() * 924;
        break;
      case 13:
          this.apuesta = this.goApuestaBase() * 1716;
        break;
      case 14:
          this.apuesta = this.goApuestaBase() * 3003;
        break;
      case 15:
          this.apuesta = this.goApuestaBase() * 5005;
        break;
      default:
          this.apuesta = this.goApuestaBase();
        break;
    }
  }

  // SweetAlert2 para cuando se selecciona mas de 15 Numeros
  goAlerta() {
    let timerInterval
    Swal.fire({
      icon: 'warning',
      title: 'Máximo de números',
      html: 'No se puede elejir mas de 15 números!',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('Estaba cerrado por el temporizador')
      }
    })
  }

  goBoton(id:any): void {
    let page = document.getElementById(id);
    let inactivo = page.classList.contains("botonActivo");
    if(this.contador >= 0 && this.contador <= 16 ) {
      console.log(id);
      console.log(page);
      this.playStart= false;
      console.log("playStart ", this.playStart);
      if(inactivo == false) {
        if(this.contador == 15){
          console.log("inactivoooooo ------>!!!!");
          this.goAlerta();
        } else {
          page.className = "botonActivo";
          this.contador = this.contador + 1;
          this.apuestaUsuario.push(id);
          console.log(this.apuestaUsuario);
          console.log("APUESTA :", this.apuestaUsuario[0]);
        }
      } else {
        page.className = "";
        this.contador = this.contador - 1;
        let apuesta = this.apuestaUsuario.indexOf(id);
        console.log("posicion: ",apuesta);
        this.apuestaUsuario.splice(apuesta,1)
        console.log(this.apuestaUsuario);
      }
      console.log("Contador ",this.contador);
    }
    if(this.contador >= 6 && this.contadorJack == 1) {
      this.playStart = true;
      console.log("playStart ", this.playStart);
    }
    if(this.contador == 15) {
      console.log("Contador 2",this.contadorJack);
      if(this.contadorJack == 1 && this.contador > 5) {
        this.playStart = true;
        console.log("playStart ", this.playStart);
      }
    }
    this.goSwitchApuesta(this.contador);
    console.log("Apuesta ----> ", this.apuesta);
    console.log("Contador ",this.contador);
  }

  goSuerte(): void {
    console.log("Suerte --->");
    console.log("apuestas ---> ", this.apuestaUsuario.length);
    console.log("apuestas datos ---> ", this.apuestaUsuario);
    if(this.apuestaUsuario.length > 0) {
      for (let p = 0; p < this.apuestaUsuario.length; p++) {
        let element = this.apuestaUsuario[p];
        console.log(element);
        console.log(p);
        let page = document.getElementById(element);
        page.className = "";
        console.log(page);
      }
      this.contador = 0;
      this.apuestaUsuario = [];
      console.log("Aleatorio ----> ", this.randomNumber(0, 46));
      for (let b = 0; b < 45; b++) {
        let page = document.getElementById(`${b}`);
        page.className = "";
      }
      for (let i = 0; i < 6; i++) {
        let nAleatorio = this.randomNumber(0, 46);
        if(this.apuestaUsuario.indexOf(nAleatorio) == -1) {
          console.log("numero no existe");
          this.apuestaUsuario.push(nAleatorio);
          let element = this.apuestaUsuario[i];
          let page = document.getElementById(element);
          page.className = "botonActivo";
        } else {
          console.log("numero existe");
          i--;
        }
      }
      console.log("apuestas datos ---> ", this.apuestaUsuario);
      this.contador = 6;
      console.log("Contador ",this.contador);
    } else {
      console.log("Aleatorio ----> ", this.randomNumber(0, 46));
      for (let b = 0; b < 45; b++) {
        let page = document.getElementById(`${b}`);
        page.className = "";
      }
      for (let i = 0; i < 6; i++) {
        let nAleatorio = this.randomNumber(0, 46);
        if(this.apuestaUsuario.indexOf(nAleatorio) == -1) {
          console.log("numero no existe");
          this.apuestaUsuario.push(nAleatorio);
          let element = this.apuestaUsuario[i];
          let page = document.getElementById(element);
          page.className = "botonActivo";
        } else {
          console.log("numero existe");
          i--;
        }
      }
      console.log("apuestas datos ---> ", this.apuestaUsuario);
      this.contador = 6;
      console.log("Contador ",this.contador);
    }
    if(this.contador >= 6 && this.contadorJack == 1) {
      this.playStart = true;
      console.log("playStart ", this.playStart);
    } else {
      this.playStart = false;
      console.log("playStart ", this.playStart);
    }
    this.goSwitchApuesta(this.contador);
    console.log("Apuesta ----> ", this.apuesta);
    console.log("Contador ",this.contador);
  }

  goJack(id:any): void {
    let jack = document.getElementById(id);
    let inactivo = jack.classList.contains("botonActivo");
    if(this.contadorJack >= 0 && this.contadorJack < 1 ) {
      console.log(id);
      console.log(jack);
      this.playStart = false;
      console.log("playStart ", this.playStart);
      if(inactivo == false) {
        jack.className = "botonActivo";
        this.contadorJack = this.contadorJack + 1;
        this.jackUsuario = id;
        this.playStart = false;
        console.log("jackPot :", this.jackUsuario);
      } else {
        jack.className = "";
        this.contadorJack = this.contadorJack - 1
        this.jackUsuario = null;
        this.playStart = false;
        console.log("jackPot :", this.jackUsuario);
      }
      console.log("Contador 2", this.contadorJack);
    }
    if(this.contadorJack == 1) {
      if(inactivo == true) {
        jack.className = "";
        this.contadorJack = this.contadorJack - 1;
        this.jackUsuario = null;
        this.playStart = false;
        console.log("jackPot :", this.jackUsuario);
      } else {
        this.playStart = false;
      }
      console.log("Contador 2", this.contadorJack);
      if(this.contador >= 6 && this.contadorJack == 1) {
        this.playStart = true;
        console.log("playStart ", this.playStart);
      } else {
        this.playStart = false;
        console.log("playStart ", this.playStart);
      }
    }
    console.log("Contador ", this.contador);
  }

  goPlay(): void {
    console.log("playStart: ", this.playStart);
  }

}

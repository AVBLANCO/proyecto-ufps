import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptService {

  constructor() { }

  Carga( archivos:string[]){
    for (let archivo of archivos){
      let scripts = document.createElement("script");
      scripts.src = ""
    }
  }
}

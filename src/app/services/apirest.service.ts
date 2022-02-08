import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Clientes } from "../models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  URLAPI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCliente(){
    const url = `${this.URLAPI}/getClientes`;
    return this.http.get<Clientes[]>(url);
  }

}

import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { Clientes } from "../../models/cliente";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Clientes[] = [];

  constructor(public apirestService: ApirestService, private _builder: FormBuilder) { }

  ngOnInit() {
    this.apirestService.getCliente().subscribe(
      (res) => {
        this.clientes = res;
      },
      (err) => console.error(err)
    );
  }

}

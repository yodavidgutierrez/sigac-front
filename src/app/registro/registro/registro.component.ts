import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup
  siguiente1: boolean;
  siguiente2: boolean;
  siguiente3: boolean;
  siguiente4: boolean;
  siguiente5: boolean;
  constructor() { }

  ngOnInit() {
    this.forma = new FormGroup({
      'numIdentificacion': new FormControl('',),
      'fechaEstado': new FormControl('', Validators.required),
      'estadoAlumno': new FormControl('', Validators.required),
      'tipoId': new FormControl('', Validators.required),
      'numero': new FormControl('', Validators.required),
      'depExp': new FormControl('', Validators.required),
      'munExp': new FormControl('', Validators.required),
      'genero': new FormControl('', Validators.required),
      'fechaNacimiento': new FormControl('', Validators.required),
      'depNacimiento': new FormControl('', Validators.required),
      'munNacimiento': new FormControl('', Validators.required),
      'primerNombre': new FormControl('', Validators.required),
      'segundoNombre': new FormControl('', ),
      'primerApellido': new FormControl('', Validators.required),
      'segundoApellido': new FormControl('', ),
      'dirResidencia': new FormControl('', Validators.required),
      'barrioResidencia': new FormControl('', ),
      'depResidencia': new FormControl('', Validators.required),
      'munResidencia': new FormControl('', Validators.required),
      'zona': new FormControl('', Validators.required),
      'telefono': new FormControl('', ),
      'caracter': new FormControl('', ),
      'especialidad': new FormControl('', ),
      'subsidio': new FormControl('', ),
      'EPS': new FormControl('', ),
      'IPS': new FormControl('', ),
      'RH': new FormControl('', ),
      'ARS': new FormControl('', ),
      'victConflicto': new FormControl('', ),
      'fechaExpulsion': new FormControl('',),
      'depExpulsor': new FormControl('',),
      'munExpulsor': new FormControl('', ),
      'certificado': new FormControl('',)
    })
  }

  nextPage1() {
     this.siguiente1 = true;
  }
  nextPage2() {
    this.siguiente2 = true;
 }
 nextPage3() {
  this.siguiente3 = true;
}
nextPage4() {
  this.siguiente4 = true;
}
nextPage5() {
  this.siguiente5 = true;
}

registrarEstudiante(){

}

}

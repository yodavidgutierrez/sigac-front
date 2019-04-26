import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IdentityTypeService } from '../../services/identity-type.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  forma: FormGroup;
  identityTipes: any;
  constructor( private identity: IdentityTypeService) { }

  ngOnInit() {

    console.log(this.identityTipes);
  }

  initForm(){
    this.forma = new FormGroup({
      'tipDocumento': new FormControl(''),
      'numDocumento': new FormControl('')
    });
  }

}

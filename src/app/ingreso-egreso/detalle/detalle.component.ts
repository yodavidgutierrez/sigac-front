import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {
  items: IngresoEgreso[];
  subscription: Subscription = new Subscription();
  constructor( private store: Store<AppState>, public ingresoEgresoService:IngresoEgresoService) { }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
    .subscribe(ingresoEgreso => this.items = ingresoEgreso.items)
  }

  borrarItem(uid: string){
    this.ingresoEgresoService.borrarIngresoEgreso(uid);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

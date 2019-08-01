import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  constructor(private store: Store<any>) {}

  getCurrentValue(): Observable<any> {
    return this.store.select(store => {
      return store.internationalization.locale.currentValue;
    }).pipe(filter(Boolean));
  }

}

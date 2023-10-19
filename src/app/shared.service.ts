import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Initial Value , No Change Perform yet !');
  public data$: Observable<string> = this.dataSubject.asObservable();

  updateData(newData: string) {
    this.dataSubject.next(newData);
  }
}

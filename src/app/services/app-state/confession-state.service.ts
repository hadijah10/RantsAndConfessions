import { Injectable } from '@angular/core';
import { ConfessionService } from '../api-consumer/confessions/confession.service';
import { IConfessionResponse, Ifilter, IGetConfessionData } from '../../model/confessiondata.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfessionStateService {

  private confessionSubject = new BehaviorSubject<IConfessionResponse | null>(null)
  confession$ = this.confessionSubject.asObservable();

  constructor(private confessionService: ConfessionService) { }

  getConfessions(status: Ifilter) {
    const subscription = this.confessionService.getConfessions(status).subscribe(value => {
      this.confessionSubject.next(value);
      subscription.unsubscribe()
    })
  }

}

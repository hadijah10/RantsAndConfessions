import { Component, OnDestroy, OnInit } from '@angular/core';
import { IConfessionResponse, Ifilter, IGetConfessionData } from '../../../model/confessiondata.interface';
import { ConfessionStateService } from '../../../services/app-state/confession-state.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-confessions',
  imports: [CommonModule],
  templateUrl: './confessions.component.html',
  styleUrl: './confessions.component.scss'
})
export class ConfessionsComponent implements OnInit, OnDestroy {
onDelete(_t18: IGetConfessionData) {
throw new Error('Method not implemented.');
}

  selectedFilter: Ifilter = '';
  data: IConfessionResponse | null = null;

  subscription: Subscription = new Subscription();

  constructor(private confessionState: ConfessionStateService) {
    this.confessionState.getConfessions(this.selectedFilter)
   }

  ngOnInit(): void {
    this.confessionState.confession$.subscribe(value => {
      this.data = value;
    })
  }

  toggleCreate() {

  }

  setFilter(filter: Ifilter) {
    this.selectedFilter = filter;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

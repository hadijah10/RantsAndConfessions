import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() totalPage: number = 1;
  @Output() next: EventEmitter<void> = new EventEmitter()
  @Output() prev: EventEmitter<void> = new EventEmitter()
}

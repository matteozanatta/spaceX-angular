import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('pageLoad', [
      state('initial', style({ transform: 'scale(0)' })),
      state('loading', style({ transform: 'scale(1)' })),
      transition('initial => loading', animate('400ms 1ms ease-in-out')),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  animationLoading: String = 'initial';

  constructor() {}

  ngOnInit(): void {
    this.animationLoading = 'loading';
  }
}

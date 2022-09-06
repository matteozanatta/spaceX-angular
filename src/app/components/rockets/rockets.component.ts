import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Rockets } from 'src/app/interfaces/Rockets';
import { SpacexAPIService } from 'src/app/services/spacex-api.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css'],
  animations: [
    trigger('scrollCards', [
      state('initial', style({ transform: 'scale(0.99)' })),
      state('scroll', style({ transform: 'scale(0.95)' })),
      transition('void => initial', animate('600ms 200ms ease-in-out')),
      transition('initial <=> scroll', animate('600ms ease-in-out')),
    ]),
  ],
})
export class RocketsComponent implements OnInit {
  rockets!: Rockets[];
  animationState: String = 'initial';

  @HostListener('window:scroll', [])
  scroll(): void {
    if (window.scrollY < 300) {
      this.animationState = 'initial';
    }
    if (window.scrollY >= 300) {
      this.animationState = 'scroll';
    }
  }

  constructor(private spaceXAPI: SpacexAPIService) {}

  ngOnInit(): void {
    this.spaceXAPI
      .getRockets()
      .subscribe((response) => (this.rockets = response));
  }
}
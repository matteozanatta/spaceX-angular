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
      state('initial', style({ transform: 'scale(1)' })),
      state('scroll', style({ transform: 'scale(1)' })),
      transition('void => initial', animate('500ms 200ms ease-in-out')),
      transition('initial <=> scroll', animate('500ms ease-in-out')),
    ]),
    trigger('loadRocket', [
      state(
        'initial',
        style({
          transform: 'translateZ(-1px) scale(2) rotate(10deg) translateY(0px)',
        })
      ),
      transition('void => initial', animate('1500ms 200ms ease-in-out')),
    ]),
    trigger('loadFlameRocket', [
      state(
        'initial',
        style({
          transform:
            'translateZ(-1px) scale(2) translateX(-35px) translateY(130px) rotate(240deg)',
        })
      ),
      transition('void => initial', animate('1500ms 200ms ease-in-out')),
    ]),
  ],
})
export class RocketsComponent implements OnInit {
  rockets!: Rockets[];
  animationState: String = 'initial';
  rocketAnimationState: String = 'initial';
  flameAnimationState: String = 'initial';

  @HostListener('window:scroll', [])
  scroll(): void {
    if (window.scrollY === 0) {
      this.animationState = 'initial';
    }
    if (window.scrollY > 0) {
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

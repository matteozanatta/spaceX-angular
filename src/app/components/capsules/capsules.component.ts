import { Component, EventEmitter, OnInit } from '@angular/core';
import { SpacexAPIService } from 'src/app/services/spacex-api.service';
import { Capsule } from 'src/app/interfaces/Capsules';
import { Observable, Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css'],
  animations: [
    trigger('cardAnimation', [
      state(
        'void',
        style({
          transform: 'scale(0)',
          opacity: '0',
        })
      ),
      state(
        'load',
        style({
          transform: 'scale(1)',
          opacity: '1',
        })
      ),
      state(
        'change',
        style({
          transform: 'scale(0)',
          opacity: '1',
        })
      ),
      transition('void <=> load', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CapsulesComponent implements OnInit {
  capsules!: Capsule[];
  capsules_status: String[] = [];
  animationState!: String;

  subscription!: Subscription;
  capsules_filtered_status!: String[];

  constructor(
    private spaceXAPI: SpacexAPIService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .getCapsulesStatusFilters()
      .subscribe((response) => {
        this.capsules_filtered_status = response;
      });
  }

  ngOnInit(): void {
    //animations
    this.animationState = 'load';

    //get data from SpaceX API
    this.spaceXAPI.getCapsules().subscribe((response) => {
      this.capsules = response;
      for (let i = 0; i < response.length; i++) {
        if (this.capsules_status.indexOf(response[i].status) === -1) {
          this.capsules_status.push(response[i].status);
        }
      }
    });
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { Capsule } from 'src/app/interfaces/Capsules';
import {
  faRecycle,
  faWater,
  faExplosion,
} from '@fortawesome/free-solid-svg-icons';
import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css'],
  
})
export class CapsuleComponent implements OnInit {
  @Input() capsule!: Capsule;
  faRecycle = faRecycle;
  faWater = faWater;
  faExplosion = faExplosion;


  constructor() {}

  ngOnInit(): void {
   
  }

}

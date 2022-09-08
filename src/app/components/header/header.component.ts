import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  HostListener,
  MissingTranslationStrategy,
  OnInit,
} from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  animationLoading: String = 'initial';

  @HostListener('window:scroll', [])
  scroll(): void {
    if (window.scrollY < 80) {
      this.animationLoading = 'initial';
    }
    if (window.scrollY >= 80) {
      this.animationLoading = 'scroll';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

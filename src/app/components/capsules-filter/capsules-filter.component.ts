import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-capsules-filter',
  templateUrl: './capsules-filter.component.html',
  styleUrls: ['./capsules-filter.component.css'],
})
export class CapsulesFilterComponent implements OnInit {
  @Input() capsules_status!: String[];
  public active_status: String[] = ['active'];

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  handleCheck(event: any, status: String) {
    if (
      this.active_status.indexOf(status) === -1 &&
      event.target.checked === true
    ) {
      this.active_status.push(status);
    }
    if (
      this.active_status.indexOf(status) !== -1 &&
      event.target.checked === false
    ) {
      this.active_status.splice(this.active_status.indexOf(status), 1);
    }

    this.uiService.updateCapsulesStatusFilters(this.active_status);
  }
}

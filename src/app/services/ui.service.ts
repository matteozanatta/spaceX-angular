import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private capsulesStatusFilters!: String[];
  private subject = new BehaviorSubject<String[]>(['active']);

  constructor() {}

  updateCapsulesStatusFilters(status: String[]) {
    this.capsulesStatusFilters = status;
    this.subject.next(this.capsulesStatusFilters);
  }

  getCapsulesStatusFilters(): Observable<String[]> {
    return this.subject.asObservable();
  }
}

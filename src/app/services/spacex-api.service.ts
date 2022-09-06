import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Capsule } from '../interfaces/Capsules';
import { Rockets } from '../interfaces/Rockets';

@Injectable({
  providedIn: 'root',
})
export class SpacexAPIService {
  constructor(private http: HttpClient) {}

  private allURL = 'https://api.spacexdata.com/v4/';

  getCapsules(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(this.allURL + 'capsules');
  }

  getRockets(): Observable<Rockets[]> {
    return this.http.get<Rockets[]>(this.allURL + 'rockets');
  }
}

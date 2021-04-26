import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  apiUrl="https://localhost:44390/api/personupdates"

  constructor() { }
}

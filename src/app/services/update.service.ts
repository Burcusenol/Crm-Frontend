import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  apiUrl="https://localhost:44300/api/personupdates"

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {
  apiUrl="https://localhost:44390/api/headings"

  constructor() { }
}

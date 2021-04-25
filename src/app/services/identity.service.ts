import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentitiesService {
  apiUrl="https://localhost:44300/api/identities"

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private choice: number;
  getChoice() {return this.choice; }
  setChoice(num: number) { this.choice = num; }
}

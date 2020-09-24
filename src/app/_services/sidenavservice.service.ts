import { Injectable, Output, EventEmitter } from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  isOpen = true;
  moveToggle = true;

  @Output() change: EventEmitter<boolean> = new EventEmitter;

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);

    this.moveToggle = !this.moveToggle;
    this.change.emit(this.moveToggle);
  }
}

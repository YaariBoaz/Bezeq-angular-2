import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'main-navbar',
  templateUrl: 'main-navbar.component.html',
  styleUrls: ['main-navbar.component.scss'],
  host: {
    '[class.app-navbar]': 'true',
    '[class.show-overlay]': 'showOverlay'
  }
})
export class MainNavbarComponent implements OnInit {
  @Input() title: string;
  @Input() openedSidebar: boolean = false;
  @Input() openedAddition: boolean = false;
  @Output() sidebarState = new EventEmitter();
  @Output() additionState = new EventEmitter();
  showOverlay: boolean = false;

  constructor() {}

  open(event) {
    let clickedComponent = event.target.closest('.nav-item');
    let items = clickedComponent.parentElement.children;

    event.preventDefault();

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }
    clickedComponent.classList.add('opened');

    //Add class 'show-overlay'
    this.showOverlay = true;
  }

  close(event) {
    let clickedComponent = event.target;
    let items = clickedComponent.parentElement.children;

    event.preventDefault();

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }

    //Remove class 'show-overlay'
    this.showOverlay = false;

    //Close addition navbar
    if (this.openedAddition) {
      this.openedAddition = false;
      this.additionState.emit();
    }
  }

  openAddition(event) {
    let clickedComponent = event.target.closest('.nav-item');
    let items = clickedComponent.parentElement.children;

    event.preventDefault();

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }
    clickedComponent.classList.add('opened');

    //Add class 'show-overlay'
    this.showOverlay = true;

    //Open addition navbar
    this.openedAddition = !this.openedAddition;
    this.additionState.emit();
  }

  openSidebar() {
    this.openedSidebar = !this.openedSidebar;
    this.sidebarState.emit();
  }

  ngOnInit() { }
}

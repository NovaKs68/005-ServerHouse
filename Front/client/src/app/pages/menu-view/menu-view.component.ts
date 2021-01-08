import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss'],
  animations: [
    trigger('subButtonAddDisplay', [
      state('state1', style({marginTop: '0px',})),
      state('state2', style({marginTop: '135px',})),
      transition('state1=>state2', animate('250ms')),
      transition('state2=>state1', animate('250ms')),
    ]),
    trigger('subButtonSeeDisplay', [
      state('state2', style({marginTop: '135px',})),
      state('state1', style({marginTop: '0px',})),
      transition('state1=>state2', animate('250ms')),
      transition('state2=>state1', animate('250ms')),
    ]),
  ]
})
export class MenuViewComponent implements OnInit {
  subButtonAddDisplay = 'state1';
  subButtonSeeDisplay = 'state1';

  constructor() { }

  ngOnInit(): void {
  }

  async subButtonAdd() {
    if (this.subButtonSeeDisplay === 'state2') {
      this.subButtonSeeDisplay = 'state1';
      await this.delay(250);
    }
    this.subButtonAddDisplay = this.subButtonAddDisplay === 'state1' ? 'state2' : 'state1';
  }

  async subButtonSee() {
    if (this.subButtonAddDisplay === 'state2') {
      this.subButtonAddDisplay = 'state1';
      await this.delay(250);
    }
    this.subButtonSeeDisplay = this.subButtonSeeDisplay === 'state1' ? 'state2' : 'state1';
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}

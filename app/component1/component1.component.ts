import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Component1Component implements OnInit {
  public showModal = false;
  public listItems: Array<string> = []; // = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  constructor() { }

  ngOnInit() {
  }

  public onClick()
  {
    this.listItems =  ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  }

  public showTheModal()
  {
    this.showModal = true;  //test
  }
}
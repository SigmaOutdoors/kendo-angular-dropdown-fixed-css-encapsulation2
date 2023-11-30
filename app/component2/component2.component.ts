import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
 // encapsulation: ViewEncapsulation.Native // (default?)
 // encapsulation: ViewEncapsulation.Emulated
 //encapsulation: ViewEncapsulation.ShadowDom
 encapsulation: ViewEncapsulation.None
})
export class Component2Component implements OnInit {

  public listItems2: Array<string> = ["one", "two", "three", "four"];
  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Component1Component implements OnInit {
  public showModal = false;
  public listItems: Array<string> = []; 
  constructor() { }

  public comboBoxControl = new FormControl(); // Initialize without a value
  public selectedValue = "";
  ngOnInit() {
  }

  public onClick()
  {
    this.listItems =  ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];

    this.selectedValue = this.listItems[2];
  }

  public showTheModal()
  {
    this.showModal = true;  //test2
  }
}
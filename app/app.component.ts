import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>Override CSS in Kendo Controls</h1>
    <a  routerLink="comp1">Comp1</a> |
    <a routerLink="comp2">Comp2</a> |          
    <router-outlet></router-outlet>
  `
})
/**
 * Need to set ViewEncapsulation.None in order to oveeride kendo css
 */
export class AppComponent {

  constructor(private router: Router)
  {
      router.navigate(['comp1']);
  }

}

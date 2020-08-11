import { Component, ViewEncapsulation } from '@angular/core';

@Component({

  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    
    <div class="container">
    <a routerLinkActive="active" 
       routerLink="comp1">Comp1</a> |
    <a routerLinkActive="active" 
       routerLink="comp2">Comp2</a> |          
    <router-outlet></router-outlet>
    
  </div>
  `
})
/**
 * Need to set ViewEncapsulation.None in order to oveeride kendo css
 */
export class AppComponent {



  selectionChange(newSelection)
  {
    console.log('newSelection =' + newSelection);
  }

}

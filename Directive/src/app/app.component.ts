import { Component, ViewChild } from '@angular/core';
import { ChildDirective } from './child.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive';
  extraChild!: string;
  
  @ViewChild(ChildDirective) 
  set appChild(directive: ChildDirective) {
    this.extraChild = directive.child
  };

  ngAfterViewInit() {
    console.log(this.extraChild );
  }

}

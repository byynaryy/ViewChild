import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @ViewChild('childReferenceVariable') childReferenceVariable: any;

  constructor() {}

  ngOnInit(): void {
    console.log('this childReferenceVariable', this.childReferenceVariable = "theChildReferenceVariable");
  }
}

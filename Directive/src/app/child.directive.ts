import { Directive, ElementRef, Renderer2,} from '@angular/core';

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {

  child = 'firstBorn';

  constructor(element: ElementRef, renderer: Renderer2) {
    let secondBorn = renderer.createText('SecondBorn ');
    renderer.appendChild(element.nativeElement, secondBorn);
  }

}

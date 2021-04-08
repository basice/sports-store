import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[counterOf]',
})
export class CounterDirective implements OnChanges {
  @Input('counterOf')
  counter: number;

  constructor(private container: ViewContainerRef, private template: TemplateRef<object>) {}

  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
    }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}

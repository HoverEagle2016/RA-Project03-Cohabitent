import { Component, Input, ElementRef } from '@angular/core';


@Component({
  selector: 'cohab-carousel',
  template: `<ng-content></ng-content>`
})
export class OwlCarouselComponent {
  @Input() options: Object;

  $owlElement: any;

  defaultOptions: any = {};

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    for (var key in this.options) {
      this.defaultOptions[key] = this.options[key];
    }
    console.log(this.$owlElement);
    this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
    console.log(this.$owlElement);
    console.log(this.defaultOptions);
  }

  ngOnDestroy() {
    //this.$owlElement.data('owlCarousel').destroy();
    //this.$owlElement = null;
  }
}



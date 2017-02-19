import { Component, Input, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'cohab-carousel',
  templateUrl: './owlCarousel.component.html',
  styleUrls: ['./owl.carousel.min.css']
  // template: `<ng-content></ng-content>`,
  
})
export class OwlCarouselComponent implements OnInit{
  @Input() options: Object;

  $owlElement: any;

  defaultOptions: any = {};

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    for (var key in this.options) {
      this.defaultOptions[key] = this.options[key];
    } 
    this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
      
      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:4
              }
          }
          });

      console.log('carousel afterViewInit component');
   }

   ngOnInit() {
    //  for (var key in this.options) {
    //   this.defaultOptions[key] = this.options[key];
    // } 
    // this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
    // console.log('init carousel component');
   }
 
}



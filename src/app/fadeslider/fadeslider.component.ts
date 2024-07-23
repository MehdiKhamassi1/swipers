import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA, AfterViewInit} from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-fadeslider',
  templateUrl: './fadeslider.component.html',
  styleUrls: ['./fadeslider.component.css'],
  
})
export class FadesliderComponent implements OnInit,AfterViewInit {
  
  images:string[]=[
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg"
  ];
  range: number[] = Array.from({ length: this.images.length }, (_, i) => i);
  activeslide:number=0;
  activesign="p";
  sw !:Swiper;
  ngAfterViewInit(): void {
    this.sw = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    setInterval(()=> this.ff(),3150);
  }
  ngOnInit(): void {
    
   
  }
  ff(){
    if(this.activesign==="m"){     
      this.sw.slideTo(this.sw.activeIndex-1,6000);
    }
    else if(this.activesign==="p"){
      this.sw.slideTo(this.sw.activeIndex+1,6000);
    }   
    if(this.sw.activeIndex==this.images.length-1){
        this.activesign="m";     
    } 
    if(this.sw.activeIndex===0){   
      this.activesign="p";
    }
}
}

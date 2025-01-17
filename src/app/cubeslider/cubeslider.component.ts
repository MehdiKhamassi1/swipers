import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-cubeslider',
  templateUrl: './cubeslider.component.html',
  styleUrls: ['./cubeslider.component.css']
})
export class CubesliderComponent implements OnInit,AfterViewInit{
  
  images:string[]=[
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
  ];
  range: number[] = Array.from({ length: this.images.length }, (_, i) => i);
  activeslide:number=0;
  activesign="p";
  sw!:Swiper;
  ngAfterViewInit(): void {
    this.sw = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
    setInterval(()=> this.ff(),4250);
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

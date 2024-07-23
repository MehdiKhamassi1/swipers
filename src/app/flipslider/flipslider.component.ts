import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-flipslider',
  templateUrl: './flipslider.component.html',
  styleUrls: ['./flipslider.component.css']
})
export class FlipsliderComponent implements OnInit,AfterViewInit{
  
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
    this.sw= new Swiper(".mySwiper", {
      
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      speed: 3000,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     
    });
    setInterval(()=> this.ff(),3150);
  }
  ngOnInit(): void {
  
  }

  ff(){
    
    if(this.activesign==="m"){
      this.activeslide--;
      this.sw.slideTo(this.activeslide,6000);
    }
    else if(this.activesign==="p"){
      this.activeslide++;
      this.sw.slideTo(this.activeslide,6000);
    }   
    if(this.sw.realIndex===5){
        this.activesign="m";     } 
        if(this.sw.realIndex===0){
      this.activesign="p";
    }
    
  }
  
  
}

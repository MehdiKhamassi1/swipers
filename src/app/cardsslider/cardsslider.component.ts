import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-cardsslider',
  templateUrl: './cardsslider.component.html',
  styleUrls: ['./cardsslider.component.css']
})
export class CardssliderComponent implements OnInit{
  images:string[]=[
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
  ];
  activeslide:number=0;
  activesign="p";
  sw = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
  ngOnInit(): void {
    this.sw = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });
    setInterval(()=> this.ff(),5550);
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

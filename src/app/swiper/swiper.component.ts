import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper';


 
interface Partner {

  name: string;

  imageUrl: string;

}

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit{
  activeslide:number=0;
  activesign="p";
  partners: Partner[] = [

    { name: 'Al madanya', imageUrl: 'https://swiperjs.com/demos/images/nature-7.jpg' },

    { name: 'CBF', imageUrl: 'https://swiperjs.com/demos/images/nature-8.jpg' },

    { name: 'DACIMA Consulting', imageUrl: 'https://swiperjs.com/demos/images/nature-9.jpg' },

    { name: 'Inoteqia', imageUrl: 'https://swiperjs.com/demos/images/nature-2.jpg' },

    { name: 'K', imageUrl: 'https://swiperjs.com/demos/images/nature-7.jpg' },];

    sw = new Swiper(".mySwiper", {
      spaceBetween: 2000,
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 3,
      freeMode: true,      
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },
      
    });
    
  ngOnInit(): void {
    this.sw = new Swiper(".mySwiper", {
      spaceBetween: 2000,
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 3,
      freeMode: true,      
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },
      
    });
    setInterval(()=> this.ff(),3150);
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

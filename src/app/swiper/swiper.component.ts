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
  partners: Partner[] = [

    { name: 'Al madanya', imageUrl: 'https://swiperjs.com/demos/images/nature-7.jpg' },

    { name: 'CBF', imageUrl: 'https://swiperjs.com/demos/images/nature-8.jpg' },

    { name: 'DACIMA Consulting', imageUrl: 'https://swiperjs.com/demos/images/nature-9.jpg' },

    { name: 'Inoteqia', imageUrl: 'https://swiperjs.com/demos/images/nature-2.jpg' },

    { name: 'K', imageUrl: 'https://swiperjs.com/demos/images/nature-7.jpg' },];

  ngOnInit(): void {
    const swiper = new Swiper(".mySwiper", {
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

  }

}

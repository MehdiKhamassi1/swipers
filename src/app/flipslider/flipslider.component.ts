import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-flipslider',
  templateUrl: './flipslider.component.html',
  styleUrls: ['./flipslider.component.css']
})
export class FlipsliderComponent implements OnInit{

  ngOnInit(): void {
  const swiper = new Swiper(".mySwiper", {
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,        
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    });
  }
  current(){
    console.log();
  }
}

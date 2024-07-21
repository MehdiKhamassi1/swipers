import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-flipslider',
  templateUrl: './flipslider.component.html',
  styleUrls: ['./flipslider.component.css']
})
export class FlipsliderComponent implements OnInit{
  activeslide:number=0;
  activesign="p";
   sw = new Swiper(".mySwiper", {
      
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    speed: 3000,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
  });
  ngOnInit(): void {
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

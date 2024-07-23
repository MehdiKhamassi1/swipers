import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-sliderr',
  templateUrl: './sliderr.component.html',
  styleUrls: ['./sliderr.component.css']
})
export class SliderrComponent implements OnInit,AfterViewInit{
  constructor(private breakpointObserver: BreakpointObserver) { }
  CUSTOM_BREAKPOINTS = {
    small: '(max-width: 600px)',
    medium: '(min-width: 601px) and (max-width: 959px)',
    large: '(min-width: 960px) and (max-width: 1279px)',
    xLarge: '(min-width: 1280px)'
  };
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
  nb=3;
  ngAfterViewInit(): void {
    this.sw = new Swiper(".mySwiper", {
      spaceBetween: 150,
      slidesPerView:this.nb,
    });
    setInterval(()=> this.ff(),3150);
  }
  ngOnInit(): void {
    this.breakpointObserver.observe([
      this.CUSTOM_BREAKPOINTS.small,
      this.CUSTOM_BREAKPOINTS.medium,
      this.CUSTOM_BREAKPOINTS.large,
      this.CUSTOM_BREAKPOINTS.xLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[this.CUSTOM_BREAKPOINTS.small]) {
        if(this.nb!=1){
          this.sw = new Swiper(".mySwiper", {
            spaceBetween: 150,
            slidesPerView:1,
          });
          setInterval(()=> this.ff(),3150);  
           
        }   
        console.log("s");
      }
      if (state.breakpoints[this.CUSTOM_BREAKPOINTS.medium]) {
        if(this.nb!=2){
          this.sw = new Swiper(".mySwiper", {
            spaceBetween: 150,
            slidesPerView:2,
          });
          setInterval(()=> this.ff(),3150);   
          
        } 
        console.log("m");
      }
      if (state.breakpoints[this.CUSTOM_BREAKPOINTS.large]) {
        if(this.nb!=3){
          this.sw = new Swiper(".mySwiper", {
            spaceBetween: 150,
            slidesPerView:3,
          });
          setInterval(()=> this.ff(),3150);  
           
        } 
        console.log("l");
      }
    });
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

import { AfterViewInit, Component,OnInit } from '@angular/core';
import Atropos from 'atropos';
import Swiper from 'swiper';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-atroposslider',
  templateUrl: './atroposslider.component.html',
  styleUrls: ['./atroposslider.component.css']
})
export class AtropossliderComponent implements OnInit,AfterViewInit{
  
  constructor(private breakpointObserver: BreakpointObserver) { }
  CUSTOM_BREAKPOINTS = {
    small: '(max-width: 600px)',
    medium: '(min-width: 601px) and (max-width: 959px)',
    large: '(min-width: 960px) and (max-width: 1279px)',
    xLarge: '(min-width: 1280px)'
  };
  
  atroposInstances:any=[];
  images:string[]=[
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg"
  ];
  spacing=150;
  range: number[] = Array.from({ length: this.images.length }, (_, i) => i);
  inn:number=0;
  listt:HTMLCollection[]=[];
  activeslide:number=0;
  activesign="p";
  sw!:Swiper;
  ngAfterViewInit(): void {
    for (let i = 0; i < this.images.length; i++) {
      this.atroposInstances[i] = Atropos({
        el: `.my-atropos${i}`,
        activeOffset: 40,
        shadowScale: 1.05,
        commonOrigin: false,
      });
    }
    this.sw = new Swiper(".mySwiper", {
      spaceBetween: 150,
      grabCursor: true,
      centeredSlides: false,
      freeMode: true,      
      pagination: {
        el: ".swiper-pagination",
      },
      
    });
      setInterval(()=> this.ff(),7500); 
  }
  ngOnInit(): void {
    this.breakpointObserver.observe([
      this.CUSTOM_BREAKPOINTS.small,
      this.CUSTOM_BREAKPOINTS.medium,
      this.CUSTOM_BREAKPOINTS.large,
      this.CUSTOM_BREAKPOINTS.xLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[this.CUSTOM_BREAKPOINTS.small]) {
        this.spacing=150;       
        console.log("s");
      }
      if (state.breakpoints[this.CUSTOM_BREAKPOINTS.medium]) {
        this.spacing=150;
        console.log("m");
      }
      if (state.breakpoints[this.CUSTOM_BREAKPOINTS.large]) {
        this.spacing=150;
        console.log("l");
      }
      if (state.breakpoints[this.CUSTOM_BREAKPOINTS.xLarge]) {
        this.spacing=150;
        console.log("xl");
      }
    });
  

  }

  getClass(index: number): string {   
    return "atropos my-atropos"+index;
  }
  ff(){
      if(this.activesign==="m"){     
        this.sw.slideTo(this.sw.activeIndex-1,10000);
      }
      else if(this.activesign==="p"){
        this.sw.slideTo(this.sw.activeIndex+1,10000);
      }   
      if(this.sw.activeIndex==this.images.length-1){
          this.activesign="m";     
      } 
      if(this.sw.activeIndex===0){   
        this.activesign="p";
      }
  }
}

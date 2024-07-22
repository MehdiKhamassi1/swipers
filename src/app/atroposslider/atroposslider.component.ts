import { AfterViewInit, Component,OnInit } from '@angular/core';
import Atropos from 'atropos';
import Swiper from 'swiper';

@Component({
  selector: 'app-atroposslider',
  templateUrl: './atroposslider.component.html',
  styleUrls: ['./atroposslider.component.css']
})
export class AtropossliderComponent implements OnInit{
  
  atroposInstances:any=[];
  images:string[]=[
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg"
  ];
  inn:number=0;
  listt:HTMLCollection[]=[];
  activeslide:number=0;
  activesign="p";
  sw = new Swiper(".mySwiper", {
    spaceBetween: 1250,
    grabCursor: true,
    centeredSlides: true,
    freeMode: true,      
    loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
    
  });
  ngOnInit(): void {
    for (let i = 0; i < this.images.length; i++) {
      this.atroposInstances[i] = Atropos({
        el: `.my-atropos${i}`,
        activeOffset: 40,
        shadowScale: 1.05,
        commonOrigin: false,
      });
    }
    this.sw = new Swiper(".mySwiper", {
      spaceBetween: 750,
      grabCursor: true,
      centeredSlides: true,
      freeMode: true,      
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },
      
    });
      setInterval(()=> this.ff(),7500); 
    
    
  }

  getClass(index: number): string {   
    console.log("atropos my-atropos"+index);
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

import { AfterViewInit, Component, OnInit } from '@angular/core';
import Atropos from 'atropos';
@Component({
  selector: 'app-staticatropos',
  templateUrl: './staticatropos.component.html',
  styleUrls: ['./staticatropos.component.css']
})
export class StaticatroposComponent implements OnInit,AfterViewInit{
  
  atroposInstances:any=[];
  images:string[]=[
    "../../assets/img/1.jpeg",
    "../../assets/img/2.jpeg",
    "../../assets/img/3.jpeg",
    "../../assets/img/4.jpeg",
    "../../assets/img/5.jpeg",
    "../../assets/img/6.jpeg",
    "../../assets/img/7.jpeg",
  ];
  range: number[] = Array.from({ length: this.images.length }, (_, i) => i);
  ngAfterViewInit(): void {
    for (let i = 0; i < this.images.length; i++) {
      this.atroposInstances[i] = Atropos({
        el: `.my-atropos${i}`,
        activeOffset: 40,
        shadowScale: 1.05,
        commonOrigin: false,
      });
    }
  }
  ngOnInit(): void {
    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actual-projects',
  templateUrl: './actual-projects.component.html',
  styleUrls: ['./actual-projects.component.css']
})
export class ActualProjectsComponent implements OnInit {

  public showZoom:boolean = false;
  public srcImageZoom: string ='';

  constructor() { }

  private gallery = [
    "../../assets/images/parque1.jpg",
    "../../assets/images/parque2.jpg",
    "../../assets/images/parque3.jpg",
    "../../assets/images/parque4.jpg",
    "../../assets/images/parque5.jpg",
    "../../assets/images/parque6.jpg",
    "../../assets/images/parque7.jpg",
    "../../assets/images/parque8.jpg",
    "../../assets/images/parque9.jpg",
    "../../assets/images/parque10.jpg",
    "../../assets/images/parque11.jpg",
    "../../assets/images/parque12.jpg",
    "../../assets/images/parque13.jpg",
    "../../assets/images/parque14.jpg",
  ]

  imageZoom( img:string ){
    this.srcImageZoom = img;
    this.showZoom = true; 
  }

  closeZoom(){
    this.showZoom = false;
  }

  ngOnInit() {
  }

}

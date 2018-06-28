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

  private projects = [
    { 
      nombre: "Recuperación Parque Elefantico",
      fecha: "10/4/2018",
      lugar: "Caracas",
      trimestre: "1718-3",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod elit eu turpis commodo, quis facilisis urna maximus. Aliquam erat volutpat. In sit amet neque tristique, elementum nisl maximus, vehicula justo. Donec at augue mi. Quisque faucibus elit vitae nisl vehicula sodales. Aliquam ullamcorper turpis vitae urna lobortis, efficitur posuere quam vehicula. Integer sit amet sapien non enim fringilla mollis non in tortor. Aliquam vitae sodales augue. Maecenas vestibulum, metus sed eleifend lobortis, purus quam posuere augue, eu tristique enim dolor sed ipsum. Aenean eu mi ipsum. Suspendisse sed quam neque. Nam cursus, sapien vitae ullamcorper congue, lectus nunc ultricies odio, vel auctor turpis mauris consectetur arcu. Nullam vel purus in erat bibendum egestas. Vestibulum dui elit, lacinia eu tempus quis, tempor ut tortor. Nam blandit, mi eu ultrices eleifend, odio turpis efficitur urna, porttitor sagittis lacus tellus nec lectus. Ut dictum pretium tellus, placerat venenatis mi. Nulla aliquet sem malesuada leo facilisis laoreet. Ut elementum, augue et consequat accumsan, orci elit aliquet lorem, quis interdum ante felis ut urna. Sed pharetra ligula in metus dapibus, eget sagittis quam mollis. Suspendisse et scelerisque metus. Quisque pulvinar ornare malesuada. Cras porttitor volutpat sollicitudin. Integer porttitor gravida ipsum in auctor. Etiam efficitur sapien scelerisque nulla rutrum efficitur. Etiam mollis augue et odio mollis molestie. Vestibulum ullamcorper libero eget dui ultrices blandit. Fusce nibh nibh, consectetur at vestibulum in, luctus eget nibh. Ut vel sagittis tellus, sit amet consectetur leo.",
      image: "../../assets/images/ParqueLaMansion.jpeg"  
    },
  ]

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
    console.log("ASD")
    this.showZoom = false;
  }

  ngOnInit() {
  }

}

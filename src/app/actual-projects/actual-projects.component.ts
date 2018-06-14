import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actual-projects',
  templateUrl: './actual-projects.component.html',
  styleUrls: ['./actual-projects.component.css']
})
export class ActualProjectsComponent implements OnInit {

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
    { 
      nombre: "Trabajo con U.E. XXXX",
      fecha: "01/2/2018",
      lugar: "Caracas",
      trimestre: "1718-2",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod elit eu turpis commodo, quis facilisis urna maximus. Aliquam erat volutpat. In sit amet neque tristique, elementum nisl maximus, vehicula justo. Donec at augue mi. Quisque faucibus elit vitae nisl vehicula sodales. Aliquam ullamcorper turpis vitae urna lobortis, efficitur posuere quam vehicula. Integer sit amet sapien non enim fringilla mollis non in tortor. Aliquam vitae sodales augue. Maecenas vestibulum, metus sed eleifend lobortis, purus quam posuere augue, eu tristique enim dolor sed ipsum. Aenean eu mi ipsum. Suspendisse sed quam neque. Nam cursus, sapien vitae ullamcorper congue, lectus nunc ultricies odio, vel auctor turpis mauris consectetur arcu. Nullam vel purus in erat bibendum egestas. Vestibulum dui elit, lacinia eu tempus quis, tempor ut tortor. Nam blandit, mi eu ultrices eleifend, odio turpis efficitur urna, porttitor sagittis lacus tellus nec lectus. Ut dictum pretium tellus, placerat venenatis mi. Nulla aliquet sem malesuada leo facilisis laoreet. Ut elementum, augue et consequat accumsan, orci elit aliquet lorem, quis interdum ante felis ut urna. Sed pharetra ligula in metus dapibus, eget sagittis quam mollis. Suspendisse et scelerisque metus. Quisque pulvinar ornare malesuada. Cras porttitor volutpat sollicitudin. Integer porttitor gravida ipsum in auctor. Etiam efficitur sapien scelerisque nulla rutrum efficitur. Etiam mollis augue et odio mollis molestie. Vestibulum ullamcorper libero eget dui ultrices blandit. Fusce nibh nibh, consectetur at vestibulum in, luctus eget nibh. Ut vel sagittis tellus, sit amet consectetur leo."
    },
    { 
      nombre: "Trabajo con Cartonera Petare.",
      fecha: "15/9/2017",
      lugar: "Caracas",
      trimestre: "1718-1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod elit eu turpis commodo, quis facilisis urna maximus. Aliquam erat volutpat. In sit amet neque tristique, elementum nisl maximus, vehicula justo. Donec at augue mi. Quisque faucibus elit vitae nisl vehicula sodales. Aliquam ullamcorper turpis vitae urna lobortis, efficitur posuere quam vehicula. Integer sit amet sapien non enim fringilla mollis non in tortor. Aliquam vitae sodales augue. Maecenas vestibulum, metus sed eleifend lobortis, purus quam posuere augue, eu tristique enim dolor sed ipsum. Aenean eu mi ipsum. Suspendisse sed quam neque. Nam cursus, sapien vitae ullamcorper congue, lectus nunc ultricies odio, vel auctor turpis mauris consectetur arcu. Nullam vel purus in erat bibendum egestas. Vestibulum dui elit, lacinia eu tempus quis, tempor ut tortor. Nam blandit, mi eu ultrices eleifend, odio turpis efficitur urna, porttitor sagittis lacus tellus nec lectus. Ut dictum pretium tellus, placerat venenatis mi. Nulla aliquet sem malesuada leo facilisis laoreet. Ut elementum, augue et consequat accumsan, orci elit aliquet lorem, quis interdum ante felis ut urna. Sed pharetra ligula in metus dapibus, eget sagittis quam mollis. Suspendisse et scelerisque metus. Quisque pulvinar ornare malesuada. Cras porttitor volutpat sollicitudin. Integer porttitor gravida ipsum in auctor. Etiam efficitur sapien scelerisque nulla rutrum efficitur. Etiam mollis augue et odio mollis molestie. Vestibulum ullamcorper libero eget dui ultrices blandit. Fusce nibh nibh, consectetur at vestibulum in, luctus eget nibh. Ut vel sagittis tellus, sit amet consectetur leo."
    },
  ]

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-projects',
  templateUrl: './past-projects.component.html',
  styleUrls: ['./past-projects.component.css']
})
export class PastProjectsComponent implements OnInit {

  constructor() { }

  private projects = [
    { 
      nombre: "Recuperación Parque Elefantico",
      fecha: "10/4/2018",
      lugar: "Caracas",
      trimestre: "1718-3",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod elit eu turpis commodo, quis facilisis urna maximus. Aliquam erat volutpat. In sit amet neque tristique, elementum nisl maximus, vehicula justo. Donec at augue mi."
    },
    { 
      nombre: "Trabajo con U.E. XXXX",
      fecha: "01/2/2018",
      lugar: "Caracas",
      trimestre: "1718-2",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod elit eu turpis commodo, quis facilisis urna maximus. Aliquam erat volutpat. In sit amet neque tristique, elementum nisl maximus, vehicula justo. Donec at augue mi."
    },
    { 
      nombre: "Trabajo con Cartonera Petare.",
      fecha: "15/9/2017",
      lugar: "Caracas",
      trimestre: "1718-1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod elit eu turpis commodo, quis facilisis urna maximus. Aliquam erat volutpat. In sit amet neque tristique, elementum nisl maximus, vehicula justo. Donec at augue mi."
    },
  ]

  ngOnInit() {
  }

}

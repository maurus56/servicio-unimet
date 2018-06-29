import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-projects',
  templateUrl: './past-projects.component.html',
  styleUrls: ['./past-projects.component.css']
})
export class PastProjectsComponent implements OnInit {

  
  public showZoom:boolean = false;
  public srcImageZoom: string ='';

  constructor() { }

  private projects = [
    { 
      name: "Visita a la U.E. Colegio Manuel Piar",
      period: "1718-02",
      description: "Se realizó una visita a la Unidad Educativa Colegio Manuel Piar para la evaluación de las condiciones en las que se encontraban la infraestructura del lugar, para así poder realizar un diagnóstico acerca de sus necesidades.",
      portrate:'../../assets/images/Colegio1.jpg',
      images: [ 
        '../../assets/images/Colegio2.jpg',
        '../../assets/images/profesor.jpg',
        '../../assets/images/Colegio4.jpg',
        '../../assets/images/Colegio5.jpg',
        '../../assets/images/Colegio6.jpg',
        '../../assets/images/Colegio7.jpg',
        '../../assets/images/Colegio8.jpg',
        '../../assets/images/Colegio6.jpg',
       ]
    },
    { 
      name: "Jornada de Reciclaje - UNIMET.",
      period: "1718-02",
      description: "Se llevó a cabo un proceso de reciclaje de materiales de los principales departamentos de las escuelas de la Universidad Metropolitana. Durante esta jornada se realizaron labores de clasificación de los materiales para luego ser entregados a las compañias de reciclaje.",
      portrate:'../../assets/images/Uni1.jpg',
      images:[
        '../../assets/images/Uni2.jpg',
        '../../assets/images/Uni3.jpg',
        '../../assets/images/Uni4.jpg',
        '../../assets/images/Uni5.jpg',
        '../../assets/images/Uni6.jpg',
        '../../assets/images/Uni8.jpg',
        '../../assets/images/Uni9.jpg',
      ]
    },
  ]

  ngOnInit() {
  }

  imageZoom( img:string ){
    this.srcImageZoom = img;
    this.showZoom = true; 
  }

  closeZoom(){
    this.showZoom = false;
  }

}

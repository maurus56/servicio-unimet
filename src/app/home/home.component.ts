import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private images = [ 
    'https://www.unir.edu.ve/wp-content/uploads/2016/03/serviciocomu.jpg',
    'https://www.mppeuct.gob.ve/sites/default/files/styles/foto_principal/public/media/images/servicio_comunitario_2.jpg?itok=gpw5Fr7R',
    'http://www.unimet.edu.ve/unimetsite/wp-content/uploads/2015/06/Servicio-comunitario.jpg'
  ]

  ngOnInit() {
    
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

  @Input() image: any;
  @Output() closeZoom = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeZoom.emit(true);
  }

}

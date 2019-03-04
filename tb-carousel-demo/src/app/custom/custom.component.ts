import { Component, OnInit, Input } from '@angular/core';
import { Custom } from '../custom.model';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  // name of the input object has to be _tbModelObject
  @Input('_tbModelObject') _tbModelObject: Custom;

  constructor() { }

  ngOnInit() {
  }

}

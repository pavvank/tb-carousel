import { Component, OnInit, Input } from '@angular/core';
import { Custom } from './custom.model';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  @Input('modelObject') _tbModelObject : Custom;

  constructor() { }

  ngOnInit() {
  }
}
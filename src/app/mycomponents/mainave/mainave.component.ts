import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../myservices/service1.service';

@Component({
  selector: 'app-mainave',
  templateUrl: './mainave.component.html',
  styleUrls: ['./mainave.component.css']
})
export class MainaveComponent implements OnInit {

  constructor(private s1:Service1Service) { }

  ngOnInit() {
  }

}

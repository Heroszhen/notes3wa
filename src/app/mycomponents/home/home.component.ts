import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../myservices/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fileurl:string;
  constructor(private ss:StoreService) { 
    this.fileurl = this.ss.getFileUrl();
  }

  ngOnInit() {
  }

}

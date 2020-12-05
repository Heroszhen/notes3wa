import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../myservices/service1.service';
import { StoreService } from '../../myservices/store.service';

@Component({
  selector: 'app-jscours',
  templateUrl: './jscours.component.html',
  styleUrls: ['./jscours.component.css']
})
export class JscoursComponent implements OnInit {

  lesson:string;
  fileurl:string;
  constructor(private s1:Service1Service , private ss:StoreService) {
    this.s1.changeSubjectAndLesson("js","bases");
    this.fileurl = this.ss.getFileUrl();
   }

  ngOnInit() {
    this.s1.lesson$.subscribe((data)=>{
      this.lesson = data[0];
    });
  }

}

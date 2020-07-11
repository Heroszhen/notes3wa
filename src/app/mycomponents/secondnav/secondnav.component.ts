import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../myservices/service1.service';

@Component({
  selector: 'app-secondnav',
  templateUrl: './secondnav.component.html',
  styleUrls: ['./secondnav.component.css']
})
export class SecondnavComponent implements OnInit {

  subject:string;
  lesson:string;
  constructor(private s1:Service1Service) { }

  ngOnInit() {
    this.s1.subject$.subscribe((data)=>{
      this.subject = data[0];
    });
    this.s1.lesson$.subscribe((data)=>{
      this.lesson = data[0];
    });
  }

  changeLesson(sub,les){
    this.s1.changeSubjectAndLesson(sub,les);
  }

}

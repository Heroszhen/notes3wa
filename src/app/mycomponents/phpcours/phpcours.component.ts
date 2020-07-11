import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../myservices/service1.service';
import { StoreService } from '../../myservices/store.service';

@Component({
  selector: 'app-phpcours',
  templateUrl: './phpcours.component.html',
  styleUrls: ['./phpcours.component.css']
})
export class PhpcoursComponent implements OnInit {

  bigimg:boolean = false;
  bigimgurl:string = null;
  lesson:string;
  fileurl:string;
  mydisplay = [true,true,true,true,true];
  constructor(private s1:Service1Service , private ss:StoreService) {
    this.s1.changeSubjectAndLesson("php","version7");
    this.fileurl = this.ss.getFileUrl();
   }

  ngOnInit() :void{
    this.s1.lesson$.subscribe((data)=>{
      this.lesson = data[0];
    });
  }

  showContent(index:number):void{
    if(this.mydisplay[index] == true)this.mydisplay[index] = false;
    else this.mydisplay[index] = true;
  }

  swithBigimg(e:any,n:number):void{
    if(n == 0){
      this.bigimg = false;
      this.bigimgurl = null;
    }
    if(n == 1){
      this.bigimgurl = e.target.src;
      this.bigimg = true;
    }
  }

}

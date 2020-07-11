import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../myservices/api.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  section:string = "home";
  title:string[] = [];
  title2 = "Développeur web";
  index = 0;
  whitenav = false;
  photos = ["html.png" , "css.png","js.png","php.png","bootstrap_logo.png","jquery.png","mysql.png","angular.png","symfony.png","express.png","mongodb.png","github.png"];
  folio = [
    {"photo":"noteswf3.png","title":"Notes WF3","text":"L'application a été créée en Angular , nous pouvons lire les notes que j'ai prises pendant la formation de wf3."},
    {"photo":"mygoddess.png","title":"Alexandra Daddario","text":"Le site a été créé dans le but de m'entraîner sur Angular+PHP+Mysql."},
    {"photo":"canaljob.png","title":"Canaljob","text":"C'est un site de recherche d'emploi et de formation que j'ai refait en Symfony 4 pendant mon stage chez Canaljob."}
  ];
  bigimg = 0;
  bigimgurl="";
  message = {
    "email":"",
    "subject":"",
    "text":"",
  };
  msgalert:string = "";
  constructor(private api:ApiService) { }

  ngOnInit() {
    var _this = this;
    window.addEventListener('scroll', function(e) {
      if(window.scrollY > 20)_this.whitenav = true;
      else _this.whitenav = false;
    });
    setInterval(function(){ 
      _this.title[_this.index] = _this.title2[_this.index]; 
      _this.index++;
      if(_this.index > 15){
        _this.title = [];
        _this.index = 0;
      }
    }, 550);
  }

/*
  changeSection(section){
    this.section = section;
  }*/

  closeBigimg(b){
    this.bigimg = b;
  }
  showBigimg(url){
    this.bigimgurl = "assets/photos/"+url;
    this.bigimg = 1;
  }

  sendMessage(){
    this.msgalert = "";
    this.api.sendMessage(this.message).subscribe((data)=>{
      if(data["status"] == 1){
        this.msgalert = "<div class='alert alert-primary'>Votre message a été envoyé</div>";
      }
    });
  }
}

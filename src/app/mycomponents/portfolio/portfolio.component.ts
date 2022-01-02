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
  photos = ["html.png" , "css.png","js.png","php.png","bootstrap_logo.png","jquery.png","mysql.png","angular.png","symfony.png","express.png","mongodb.png","github.png","sveltejs.png"];
  folio = [
    {"photo":"wwwcooli.png","title":"www.cooli.fr","text":""},
    {"photo":"erpcooli.png","title":"erp.cooli.fr","text":"C'est une application web ERP.(Angular + Symfony 4 + S3_AWS)"},
    {"photo":"zdrive.png","title":"zdrive.yangzhen.fr","text":"C'est mon site de stockage et de partage de fichiers.(Angular + Symfony 4 + S3_AWS)"},
    {"photo":"si_centraline.png","title":"si.mycentraline.fr","text":"L'application a été créée en Angular + Symfony 4, c'est le système informatique en web de Centraline.."},
    {"photo":"cloud_mobile.png","title":"Cloud de Centraline","text":"Le Cloud de Centraline fait en Ionic + PHP."},
    {"photo":"canaljob.png","title":"Canaljob","text":"C'est un site de recherche d'emploi et de formation que j'ai refait en Symfony 4 pendant mon stage chez Canaljob."}
  ];
  bigimg:number = 0;
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
      if(data["status"] == 1 || data["status"] == 200){
        this.msgalert = "<div class='alert alert-primary'>Votre message a été envoyé</div>";
      }
    });
  }
}

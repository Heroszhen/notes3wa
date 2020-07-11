import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasesService {

  protected filesUrl:string;
  protected server:string;
  constructor() {
    this.filesUrl = "http://localhost:8000/";
    //this.filesUrl = "http://notes3wa.yangzhen.fr/notes3WAfiles/";
    
    //this.server = "http://127.0.0.1:8000/api/";
    this.server = "http://phpoutils.eu-west-2.elasticbeanstalk.com/api/";
  }

  getFileUrl(){
    return this.filesUrl;
  }

  getServer(){
    return this.server;
  }
}

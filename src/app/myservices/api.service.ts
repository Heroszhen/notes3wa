import { Injectable } from '@angular/core';
import { BasesService } from '../myservices/bases.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BasesService{

  constructor(private http:HttpClient) {
    super();
  }

  sendMessage(query:any){
    return this.http.post(this.server + 'email/sendmail' , JSON.stringify(query));
  }
}

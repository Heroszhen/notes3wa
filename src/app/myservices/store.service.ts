import { Injectable } from '@angular/core';
import { BasesService } from '../myservices/bases.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends BasesService{

  constructor() {
    super();
  }

}

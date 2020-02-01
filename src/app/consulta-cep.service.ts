import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

url = 'https://viacep.com.br/ws/60510450/json/';

  constructor(private http: HttpClient) { }

  consultarcep() {

    return this.http.get<any[]>(`${this.url}`);


  }

}

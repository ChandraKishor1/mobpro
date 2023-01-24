import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  Login(data:any){
    
   return this.http.post(' https://khulasa-news.com/mobpro/ask_us.php',data)
  }
}

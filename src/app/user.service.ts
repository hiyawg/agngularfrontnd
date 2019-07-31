import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/users");

  }
  public save(user:User){
    return this.http.post<User>("http://localhost:8080/users",user);

  }

     
  
}

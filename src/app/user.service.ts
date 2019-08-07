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

  public deleteEmployee(user:User) : Observable<User> {
    return this.http.delete<User>("http://localhost:8080/users" + "/"+ user.id);
  }
  public findaUser(id : number): Observable<User> {
      return this.http.get<User>("http://localhost:8080/users" + "/"+ id);
  }

  public updateUser(id : number,value: User): Observable<User>{
    return this.http.put<User>("http://localhost:8080/users" + "/"+ id,value);
  }
  

     
  
}

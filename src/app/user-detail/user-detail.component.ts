import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user : User;
  
  id : number;
  constructor(private router: Router ,private userService : UserService,private route: ActivatedRoute,private location : Location) { }

  ngOnInit() {
    this.getUser();
  }
   getUser():void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.findaUser(this.id).subscribe(
      data =>
      
      this.user = data);
     
      
   }

   deleteEmployee(user:User): void{
    this.userService.deleteEmployee(user)
    .subscribe(result => this.router.navigate(['/']));
   }
   
   
    
      

      
  

 
}

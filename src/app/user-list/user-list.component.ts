import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 users :User[];
 userlist : Observable<User[]>;
 list : UserListComponent;
 customers: Observable<User[]>;
  constructor(private location: Location,private route:ActivatedRoute,private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      console.log(data);
      this.users = data;
    });
      
  }
  
  reloadData(): void {
    this.userlist = this.userService.findAll();
  }

}

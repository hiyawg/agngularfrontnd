import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  idd : string;
  id: number;
  user : User;
  constructor(private route:ActivatedRoute,private router: Router,private userService: UserService) { 
    this.user = new User();
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.findaUser(this.id).subscribe(data => this.user = data);
    
  }

  onSubmit({value}: {value: User}) {
    value.id = this.idd;
    this.userService.updateUser(this.id,value).subscribe(data => this.user = data);
   }

}

import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {Poll} from "../dto/poll";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  polls: Array<Poll> = []


  constructor(private userService: UserService,
              private routerService: Router) { }

  ngOnInit(): void {
    if (!this.userService.getPrincipal()){
      this.routerService.navigateByUrl('login');
    }
  }

  createPoll(title: string) {
    this.polls.push(new Poll(Math.random(), title, this.userService.getPrincipal()!));
  }

}

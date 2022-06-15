import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  polls: Array<number> = []

  constructor() { }

  ngOnInit(): void {
  }

  createPoll() {
    this.polls.push(1);
  }

}

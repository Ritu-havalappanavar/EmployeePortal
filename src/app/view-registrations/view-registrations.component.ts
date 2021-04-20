import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-registrations',
  templateUrl: './view-registrations.component.html',
  styleUrls: ['./view-registrations.component.scss']
})
export class ViewRegistrationsComponent implements OnInit {
  listOfUsers: any;

  constructor(private apiService:ApiService, private router: Router) {
  }

  ngOnInit(): void {
    
  }

  ngDoCheck() {
    console.log( this.apiService.subject)
    this.apiService.subject.subscribe(users => this.listOfUsers = users);
    console.log(this.listOfUsers)
  }

  navigate() {
    this.router.navigate(['register']);
  }

}

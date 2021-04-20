import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeRegistration } from '../model/registration.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  employeeRegistrationObj: EmployeeRegistration;
  todayDate: any;

  constructor(private apiService:ApiService, private router: Router, private datePipe:DatePipe) {
    this.employeeRegistrationObj = new EmployeeRegistration();
    this.todayDate = this.datePipe.transform(new Date(),"yyyy-MM-dd");
  }

  ngOnInit(): void {
  }

  submitRegistration() {
    this.apiService.storeRegistrationDetails(this.employeeRegistrationObj);
    alert("Employee Registered Successfully!");
  }

  navigate() {
    this.router.navigate(['view']);
  }

}

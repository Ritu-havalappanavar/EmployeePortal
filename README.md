# Employee Portal
An Employee Portal built with Angular 9, Bootstrap 4 and Typescript.

The Employee Portal contains two screens .i.e. Employee Registration and View Registrations.

In Employee Registration, user can fill all the required details and register the employee.
In View Registrations, user will be able to see the registered users.


## Getting Started

Make sure you have the Angular Cli and nodejs installed globally.
1. Run `npm install` to install all the packages.
2.  Run `ng serve` to start the server.
3.  Run `ng test` to start the karma runner.
4.  Navigate to http://localhost:4200/ to access the application.


## How it works

On click of Submit in Registration form, the user data gets saved in Rxjs Behavior Subject.
The data from subject is used to display it in View registrations screen. 
On Refresh, the data gets reset.

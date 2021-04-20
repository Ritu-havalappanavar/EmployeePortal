# EmployeePortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.
The Employee Portal contains two screens .i.e. Employee Registration and View Registrations.

In Employee Registration, user can fill all the required details and register the employee. In View Registrations, user will be able to see the registered users.

## Development server

1.  Run `npm install` to install all the packages.
2.  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## How it works
On click of Submit in Registration form, the user data gets saved in Rxjs Behavior Subject. The data from subject is used to display it in View registrations screen. On Refresh, the data gets reset.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

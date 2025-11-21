import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone : true,
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {

id!: string;
name!: string;
email!: string;
salary!: number;
}

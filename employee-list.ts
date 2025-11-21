import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeServices } from '../service/employee.services';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  standalone:true,
  imports: [CommonModule,RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{
  employees: any[] = [];
  constructor(private employeeservice:EmployeeServices) {}

  ngOnInit() {
  this.employeeservice.getEmployees().subscribe(data => {
    this.employees = data;
  });
}

  delete(id: string) {
  this.employeeservice.deleteEmployee(id);
}



}

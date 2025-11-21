import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServices} from '../service/employee.services';
import { Employee } from '../models/employee/employee';

@Component({
  selector: 'app-employee-details',
  standalone :true,
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit{

  employee!: Employee | undefined;

  constructor(
  private route: ActivatedRoute,
  private service: EmployeeServices
) {}

   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.getEmployees().subscribe(data => {
        this.employee = data.find(e => e.id === id);
      });
    }
  }

}

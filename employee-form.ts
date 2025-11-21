import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployeeServices } from '../service/employee.services';

@Component({
  selector: 'app-employee-form',
  standalone:true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnInit {


addEmployee() {
throw new Error('Method not implemented.');
}
 
 id !: string;
 name = '';
 email = '';
 salary!: number;

 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private service: EmployeeServices
) {}

  ngOnInit() {
  const routeParam = this.route.snapshot.paramMap.get('id');

  if (routeParam) {
    this.id = routeParam;  

    this.service.getEmployees().subscribe(data => {
      const emp = data.find(e => e.id === this.id);
      if (emp) {
        this.name = emp.name;
        this.email = emp.email;
        this.salary = emp.salary;
      }
    });
  }
}
 save() {
  console.log("Saving employee...", this.name, this.email, this.salary);

  if (this.id) {
    this.service.updateEmployee(this.id, {
      name: this.name,
      email: this.email,
      salary: this.salary
    });
  } else {
    this.service.addEmployee({
      name: this.name,
      email: this.email,
      salary: this.salary
    });
  }

  this.router.navigate(['/']);
}

}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Employee } from '../models/employee/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeServices {
  private employees: Employee[] = [];

  private employeeSubject = new BehaviorSubject<Employee[]>(this.employees);
  employees$ = this.employeeSubject.asObservable();

  addEmployee(employee: Omit<Employee, 'id'>) {
  const newEmp: Employee = {
    id: uuid(),     
    ...employee      
  };

  this.employees.push(newEmp);          
  this.employeeSubject.next(this.employees);   
}

  getEmployees() {
  return this.employees$;
}

  updateEmployee(id: string, updated: Partial<Employee>) {
  this.employees = this.employees.map(emp =>
    emp.id === id ? { ...emp, ...updated } : emp
  );
  this.employeeSubject.next(this.employees);
}

  deleteEmployee(id: string) {
  this.employees = this.employees.filter(e => e.id !== id);
  this.employeeSubject.next(this.employees);
}
  
}

import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeForm } from './employee-form.component/employee-form';

@Component({
  selector: 'app-root',
  standalone :true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-Management');
  
}

import { Routes } from '@angular/router';
import { EmployeeForm} from './employee-form.component/employee-form';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeDetails } from './employee-details/employee-details';

export const routes: Routes = [
    { path: '', component: EmployeeList },
    { path: 'add', component: EmployeeForm },
    { path: 'edit/:id', component: EmployeeForm },
    { path: 'details/:id', component: EmployeeDetails }

];

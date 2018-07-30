import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.css']
})
export class ChildComponent1Component implements OnInit {

  constructor(private _employeeService: EmployeeServiceService) { }
  public employees = [];

  ngOnInit() {
   
  }
  onClick(){
    this._employeeService.getEmployees().subscribe(data=> this.employees=data);
    
  }
  onDelete(movie){
    this._employeeService.deleteMovie(movie.id).subscribe(res => console.log('Done'));
    window.location.reload(true);
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.css']
})
export class ChildComponent2Component implements OnInit {

  constructor(private _employeeService: EmployeeServiceService) { }
  public employees = [];

  movieModel = new Employee("","","","");
    
  onSubmit(){
    this._employeeService.saveMovie(this.movieModel).subscribe(res => console.log('Done'));
  }
    ngOnInit() {
     
    } 
   }



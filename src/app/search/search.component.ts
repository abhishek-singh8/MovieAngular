import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _employeeService: EmployeeServiceService) { }
  public movieTitle='';
  
  omdbMovie;
  ngOnInit() {
  }
  onSearch(){
    this._employeeService.searchMovie(this.movieTitle).subscribe(data=> this.omdbMovie=data);
  }

}

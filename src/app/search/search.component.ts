import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { MovieOMDB } from '../movieOMDB';
import { Employee } from '../employee';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _employeeService: EmployeeServiceService) { }
  public movieTitle='';
  movieModel = new Employee("","","","");
  
  omdbMovie;
  ngOnInit() {
  }
  onSearch(){
    this._employeeService.searchMovie(this.movieTitle).subscribe(data=> this.omdbMovie=data);
  }
  onSubmit(omdbMovie:MovieOMDB){
      this.movieModel.title=omdbMovie.Title;
      this.movieModel.year=omdbMovie.Year;
      this.movieModel.imdbId=omdbMovie.Production;
      this.movieModel.type=omdbMovie.Released;
      this._employeeService.saveMovie(this.movieModel).subscribe(res => console.log('Done'));
      
  }
  
}

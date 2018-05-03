import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name="Praveen";

  constructor() { 
    console.log('--- construcctor');
   this.name="Ozvitha";    
    this.f1();

  }

  ngOnInit() {
    console.log('-- onInit');
  
  }

  f1(){
    console.log('---- f1 function  name is '+this.name);
  }





}

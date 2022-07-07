import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotherpractice',
  templateUrl: './anotherpractice.component.html',
  styleUrls: ['./anotherpractice.component.css']
})
export class AnotherpracticeComponent implements OnInit {
  // data types in Angular
  thisIsString: string = 'this is string';
  thisIsAnotherString: string = '324342';
  thisIsNumber: number = 2;
  thisIsBoolean: boolean = true;
  thisIsAnotherBoolean: boolean = false;
  thisIsObject: {} = {key:'value'};
  thisIsArray = ['value 1', 'value 2'];
  thisIsArrayOfObjects = [{key:'value 1'}, {key:'value 2'}, {key:'value 3'}]

  
  constructor() { }

  ngOnInit(): void {
  }

  //check the camelCase format
  // Package.json, Angular.json files
  // Angular file structures
  // components,Module, 

}

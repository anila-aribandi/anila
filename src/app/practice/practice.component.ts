import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  name: string = "anila";   //name is a name, string is type, anila is a value
  number: number = 22;
  age: string = "22";
  thisIsBoolean: boolean = true;
  anotherBoolean: boolean = false;
  object: {} = {key:'value'};
  array: string[] = ['value 1' , 'value 2'];
  arrayOfObjects = [{key:"value 1"}, {key:'value 2'}];

  // line number 9 to 16 are global declarations. This are avialable for entire component.
  //global variables can be declared in the top of class.



  constructor() {
  console.log(this.name);
  console.log(this.number);
  console.log(this.age);
  console.log(this.thisIsBoolean);
  console.log(this.object);
  console.log(this.array);
  console.log(this.arrayOfObjects);
  }
   
  ngOnInit(): void {
  }

  thisIsFunction(){ // this is a function

  }

  thisIsAnotherFunction(){
    let localVariable: string = 'Anila';
    let numberVariable: number  = 22;
    // the above two lines are local variables. They are only avialble to thisIsAnotherFunction only.
    // this variables cannot be accesed outside of this function.
  }

}
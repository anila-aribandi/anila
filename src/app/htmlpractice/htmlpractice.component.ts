import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmlpractice',
  templateUrl: './htmlpractice.component.html',
  styleUrls: ['./htmlpractice.component.css']
})
export class HtmlpracticeComponent implements OnInit {
  myName: string = 'anila';
  myAge: number = 22;
  height: string = '5.3'
  boolean: boolean = true;
  object: {} = {key:'number'};
  array: string[] = ['number 1' , 'number 2'];
  arrayOfObjects = [{key:'number 1'}, {key:'number 2'}];



  constructor() {
    console.log(this.myName);
    console.log(this.myAge);
    console.log(this.height);
    console.log(this.boolean);
    console.log(this.object);
    console.log(this.array);
    console.log(this.arrayOfObjects);
   }

  ngOnInit(): void {
  }

}

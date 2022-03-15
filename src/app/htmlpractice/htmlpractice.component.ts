import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

  title: string = 'Sisters Names';
  firstNames: string[] = ['Anila', 'Nikhila', 'Srinidhi'];
  lastNames: string[] = ['Aribandi', 'Sunkara', 'Nagandla'];
  age: number[] = [22, 30, 15];
  relation: string = 'sisters';



  studentName: string = 'anila';
  studentId: number = 4;
  studentEmailId: string = 'anila@gmail.com';
  studentIds: number[] = [5, 10, 15, 20];
  //To access studentids 
  //studentIds[0] - 5
  //studentIds[3] - 20
  studentNames: string[] = ['ani', 'anila', 'chinni']
  //studentNames[1] - anila
  listOfCars: any = [
    {carNumber: 2345, carName: 'benz', caeType: 'automatic'},
    {carNumber: 6789, carName: 'bmw', carType: 'manual'}
  ]
  //listOfCars[1] - {carNumber: 6789, carName: 'bmw', carType: 'manual'}
  //listOfCars[1].carNumber - 6789  To access only carNumber we have to write like this
  //LiatOfCars[0].carType - automatic  to access carType
  car: any = {
    carName:'audi',
    carNumber: 1234,
    carPrice: 1000000,
    shippingAvailable: true,
    states: ['TS', 'AP']

  }
  //For arrays{} will have index like [0],[1]. For objects{} we dont use index
  //car.carNumber - 1234
  //car.carPrice - 1000000
  //car.states - ['TS', 'AP']
  //car.states[0] - TS
  



  constructor() {
    console.log(this.myName);
    console.log(this.myAge);
    console.log(this.height);
    console.log(this.boolean);
    console.log(this.object);
    console.log(this.array);
    console.log(this.arrayOfObjects);

    console.log(this.title);
    console.log(this.firstNames);
    console.log(this.relation);
   }

  ngOnInit(): void {
  }
  function(){
  let myName:string  = 'Anila';
  let myAge:number = 22;
  let height:string= '5.3';
  console.log(myName);
  console.log(myAge);
  console.log(height);
  }

    
  }

  function listOfCars(carNumber: number) {
    
  }
function car(carName: string, carNumber: number,shippingAvailable: boolean){

}
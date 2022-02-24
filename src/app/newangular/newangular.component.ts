import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newangular',
  templateUrl: './newangular.component.html',
  styleUrls: ['./newangular.component.css']
})
export class NewangularComponent implements OnInit 
{

  public name="Interpolation practice"; //interpolation

  public myid = "123";
  public isdisabled = true;  //property binding

  public binding = "";  //event binding

  public data="";
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){  
    console.log("event binding"); //this message will dispaly on the console 
    this.binding="eventbinding";

  }

}

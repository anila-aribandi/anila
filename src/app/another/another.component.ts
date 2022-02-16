import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit 
{
  public name="anila";
  public angularappUrl = window.location.href;
  public greetings = "";

  constructor() { }

  ngOnInit(): void {
  }
  username(){
    return "My name is "+this.name;
}
onclick(){
  this.greetings="angular practice";
}

}
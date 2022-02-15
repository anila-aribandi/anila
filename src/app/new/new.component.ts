import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  template: `
    <p>
      My name is {{name}}
    </p>
    <p>
     {{name.length}}
    </p>
    <p> {{username()}}</p>
    <p> {{angularappUrl}}</p>
    <input type="text" value="Angular10"><br><br>
    <button (click)="onclick()" type="button"> click me </button>
    <h1> {{greetings}} </h1>
  `,
  styles: [`            
   p{
     text-align:center;   
     font-size: 40px;
     color:green;
   }
  `
  ]
  //`` use this symbols to write code in multiple lines
})
export class NewComponent implements OnInit 
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

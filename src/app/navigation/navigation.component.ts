import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  navigateToCompany(){
    console.log("company called");
  }

  navigateToEmployee(){
    console.log("employee called");
  }

  navigateToVisa(){
    console.log("visa called");
  }

}

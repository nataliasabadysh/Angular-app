import { Component} from '@angular/core';
// import {__values} from "tslib";
// import deleteProperty = Reflect.deleteProperty;

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})

export class FormEventsComponent {

  text:string;
  userName:string;
  users:string[] = []; // массив

  constructor() { }

  formEvent(e){
    console.log(e);
    this.text = e.target.value;
  }

  onSubmit(){
    this.users.push(this.userName);
    console.log(this.users);
    // this.userName = '';
  }

 removeUser(i){
    console.log(i);
    this.users.splice(i);
 }
}

import { Component} from '@angular/core';
import deleteProperty = Reflect.deleteProperty;

interface User{
  name:string,
  email:string
}
@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})

export class FormEventsComponent {

  user:User = {
    name:"",
    email: ""
  };

  users:User[]= [
    {
      name:'Natasha',
      email: "test@test"
    },
    {
      name:'Denis',
      email: "test@test"
    }
];
  constructor() { }


    onSubmit(form){
      console.log(this.user);
      this.users.push({
        name: this.user.name,
        email: this.user.email
      });

      form.resetForm();
    }
    removeUser(i){
      this.users.splice(i,1);
    }
}

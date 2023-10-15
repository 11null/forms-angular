import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-hello-form',
  templateUrl: './hello-form.component.html',
  styleUrls: ['./hello-form.component.css']
})
export class HelloFormComponent {

  name : string = ''
  username : string = ''
  email : string = ''
  emailConfirm : string = ''
  password : string = ''
  passwordConfirm : string = ''
  telephone : string = ''

  submit(form:NgForm) {
    console.log(form.value)
  }

}

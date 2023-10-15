import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-super-form',
  templateUrl: './super-form.component.html',
  styleUrls: ['./super-form.component.css']
})
export class SuperFormComponent {

  name = new FormControl('')

  save() {
    this.name.setValue(this.name.value?.toUpperCase()||'')
  }

}

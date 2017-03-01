import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs: Job[];
  registerForm: FormGroup;

  constructor() {
    this.marsJobs = [{
      id: '1',
      name: 'Teacher',
      description: 'something',
    },{
      id: '2',
      name: 'Counselor',
      description: 'something else',
    },{
      id: '3',
      name: 'Principal',
      description: 'something something',
    }];

    // this.newColonist = new NewColonist('', '', '');

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      age: new FormControl('', [Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('', [Validators.required])
    });
  }

  acceptAge(min: number, max: number) {
    return (control: AbstractControl): {[key: string]: any} => {
      if (control.value < min || control.value > max) {
        return { 'Sorry good luck!': { age: control.value }};
      }
    }
  }

  logColonist() {
    console.log(this.registerForm);
  }

  ngOnInit() {
  }

}

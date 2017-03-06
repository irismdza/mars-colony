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
import { Router } from '@angular/router';

import { COLONISTS_URL, JOBS_URL } from '../models/API';

import { ColonistAPIService } from '../apiService/colonist';
import { JobsAPIService } from '../apiService/jobs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ColonistAPIService, JobsAPIService]
})

export class RegisterComponent implements OnInit {

  marsJobs: Job[];
  registerForm: FormGroup;
  clickedButton: boolean;

  constructor(
    private colonistAPIService: ColonistAPIService,
    private jobsAPIService: JobsAPIService,
    private router: Router ) {

    this.getMarsJobs();

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

  ngOnInit() {
  }

  getMarsJobs() {
    this.jobsAPIService.getMarsJobs()
                        .subscribe((result) => {
    this.marsJobs = result;
          console.log('Get mars jobs!', result);
      });
  }

  postNewColonist(event) {
    event.preventDefault();
    
    if(this.registerForm.invalid) {
      // The form is invalid...
    } else {
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist: NewColonist = new NewColonist(name, age, job_id);

      this.colonistAPIService
          .saveColonist({ colonist: newColonist })
          .subscribe((result) => { 
            localStorage.setItem('colonist_id', JSON.stringify(result.id));
            console.log('Colonist was saved:', result);
      });
    }
    this.router.navigate(['encounters'])
  }
}
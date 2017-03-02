import { Component, OnInit } from '@angular/core';
import { Alien, NewEncounter, Encounter } from '../models';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  aliens: Alien[];
  newEncounter: NewEncounter;
  encounters: Encounter[];
  reportForm: FormGroup;

  constructor() {
    this.aliens = [{
      id: '1',
      type: 'Special K',
      submitted_by: 'someone',
      description: 'something'
    },{
      id: '2',
      type: 'Endomorph',
      submitted_by: 'someone',
      description: 'something'
    },{
      id: '3',
      type: 'Ectomorph',
      submitted_by: 'someone',
      description: 'something'
    },{
      id: '4',
      type: 'Octospider',
      submitted_by: 'someone',
      description: 'something'
    },{
      id: '5',
      type: 'The Predator',
      submitted_by: 'someone',
      description: 'something'
    },{
      id: '6',
      type: 'Darth Vader',
      submitted_by: 'someone',
      description: 'something'
    },{
      id: '7',
      type: 'Donald Trump',
      submitted_by: 'someone',
      description: 'something'
    },{
      id: '8',
      type: 'Yoda',
      submitted_by: 'someone',
      description: 'something'
    }];

    this.reportForm = new FormGroup({
      atype: new FormControl('', [Validators.required]),
      action: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    });
  }
  
  logActionTaken() {
    console.log(this.reportForm);
  }

  ngOnInit() {
  }

}

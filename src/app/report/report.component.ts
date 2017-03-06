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
import { Router } from '@angular/router';

import { ALIENS_URL, ENCOUNTERS_URL } from '../models/API';

import { AliensAPIService } from '../apiService/aliens';
import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensAPIService, EncountersAPIService]
})

export class ReportComponent implements OnInit {

  aliens: Alien[];
  newEncounter: NewEncounter;
  encounters: Encounter[];
  clickedButton: boolean;
  reportForm: FormGroup;

  constructor(
    private aliensAPIService: AliensAPIService,
    private encountersAPIService: EncountersAPIService,
    private router: Router) {

    this.getAliens();

    this.reportForm = new FormGroup({
      date: new FormControl(''),
      atype: new FormControl('', [Validators.required]),
      action: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      colonist_id: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  getAliens() {
    this.aliensAPIService.getAliens()
      .subscribe((result) => {
        this.aliens = result;
        console.log('Got aliens!', result);
      });

  }

  //format Date into yyyy-MM-dd
  private getDate() {
    const d = new Date();
    const yyyy = d.getFullYear();
    let fuckmonths
    let fuckdays;
    let mm = (d.getMonth() + 1)
    if (mm < 10) {
      fuckmonths = '0' + mm
    }
    let dd = (d.getDate() + 1)
    if (dd < 10) {
     fuckdays = '0' + dd
    }
    console.log(fuckdays)
    console.log(fuckmonths)
    return `${yyyy}-${fuckmonths}-${fuckdays}`;
    // return "5"
  }




  // private getDate() {
  //   const date = new Date();
  //   return `${date.getFullYear()}-${date.getMonth() + 1} -${date.getDate()}`;
  // }

  postNewEncounter(event) {
    event.preventDefault();

    if (this.reportForm.invalid) {
      // The form is invalid...
    } else {
      const date = this.getDate()
      const atype = this.reportForm.get('atype').value;
      const action = this.reportForm.get('action').value;
      const colonist_id = localStorage.getItem('colonist_id');

      const newEncounter: NewEncounter = new NewEncounter(date, atype, action, colonist_id);

      this.encountersAPIService.saveNewEncounter({ encounter: newEncounter })
        .subscribe((result) => {
          console.log('Encounter was saved:', result);
        });
    }
    this.router.navigate(['encounters']);
  }
}

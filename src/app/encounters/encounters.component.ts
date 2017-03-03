import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersAPIService]
})
export class EncountersComponent implements OnInit {

  constructor() { }

  getEncounters() {
    this.encountersAPIService.getMarsJobs()
                        .subscribe((result) => {
    this.marsJobs = result;
          console.log('Get mars jobs!', result);
      });
  ngOnInit() {
  }

}

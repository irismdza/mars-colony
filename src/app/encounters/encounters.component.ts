import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models';
import { ENCOUNTERS_URL } from '../models/API';
import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersAPIService]
})

export class EncountersComponent implements OnInit {

  encounters: Encounter[];
  clickedButton: boolean;

  constructor(
    private encountersAPIService: EncountersAPIService
    ) {
      this.getEncounters();
    }

  getEncounters() {
    this.encountersAPIService
      .getEncounters()
      .subscribe((result) => {
        this.encounters = result;
          console.log(result);
      });
  }
  
  ngOnInit() {
    
  }
}

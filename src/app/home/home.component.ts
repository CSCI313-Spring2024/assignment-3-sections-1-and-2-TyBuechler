import {Component, inject} from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';




@Component({
  selector: 'app-home',
  imports: [HousinglocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
housingLocationList: HousingLocation[] = [];
// Injecting HousingService into the Component
housingService: HousingService = inject(HousingService);
constructor(){
//setting housingLocationlist to the data array in HousingService
this.housingLocationList = this.housingService.getAllHousingLocations();
}
   }
   
 

import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
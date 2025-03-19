import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-housinglocation',
  imports: [RouterLink,RouterOutlet,RouterModule],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  @Input() housingLocation!: HousingLocation;
}

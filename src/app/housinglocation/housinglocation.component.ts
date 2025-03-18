import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';




@Component({
  selector: 'app-housinglocation',
  imports: [],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  @Input() housingLocation!: HousingLocation;
}

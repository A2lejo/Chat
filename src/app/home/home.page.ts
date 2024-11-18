import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  position: any;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocation();
  }

  async getLocation() {
    this.position = await this.locationService.getCurrentPosition();
    console.log('Position:', this.position);
  }
}
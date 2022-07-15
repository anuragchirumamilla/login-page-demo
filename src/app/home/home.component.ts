import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  authenticate = this.authenticationService.isAuthenticated;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
  }

}

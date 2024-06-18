import { Component } from '@angular/core';
import { AuthService } from './auth-service.service';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-frontend';
  disableButton = !this.authService.isAuthenticated();
  hideButton = !this.authService.isAuthenticated();
  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) {
    this.router.events.subscribe((event) => {
      if (event) {
        this.hideButton = !this.authService.isAuthenticated();
      }
    });
  }

  ngOnInit() {
    this.authService.validateToken();
    this.disableButton = !this.authService.isAuthenticated();
      
    this.forceToCreateOrganization()

    setInterval(() => {
      this.authService.validateToken();
    }, 3 * 60 * 1000);
  }

  forceToCreateOrganization() {
    if (this.authService.isAuthenticated()) {
      this.apiService.getUser().subscribe(user => {
        if (user.organizationId === null) {
          this.router.navigate(['/create-organization']);
          
        }
      });
    }
  }
}

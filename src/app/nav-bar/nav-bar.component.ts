import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  themeService: ThemeService;

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
    console.log(this.themeService.getDarkModePhoto());
  }

  toggleDarkMode() {
    this.themeService.updateLight(this.themeService.lightSignal());
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';
import { ShowaboutComponent } from './about/showabout/showabout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = "George's Website";
  themeService: ThemeService;

  /**
   *
   * @param themeService injects the theme service responsible for controlling
   * theme
   */
  constructor(themeService: ThemeService) {
    this.themeService = themeService;
  }
}

import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { RouterLink } from '@angular/router';
import { DOCUMENT, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgIf, RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  themeService: ThemeService;
  isDropdownSelected = false;
  window = this.getWindow();

  constructor(
    themeService: ThemeService,
    @Inject(DOCUMENT) private _doc: Document
  ) {
    this.themeService = themeService;
  }

  toggleDarkMode() {
    this.themeService.updateLight(this.themeService.lightSignal());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateScreen();
  }

  getWindow(): Window | null {
    return this._doc.defaultView;
  }

  updateScreen() {
    if (window!.innerWidth < 960) {
      this.isDropdownSelected = false;
    }
  }

  toggleDropdown() {
    this.isDropdownSelected = !this.isDropdownSelected;
  }
}

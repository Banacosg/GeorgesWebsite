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
  isDropdownSelected = false;
  window = this.getWindow();
  curColor = 'Black';

  /**
   *
   * @param themeService The service that handles the current theme
   * @param _doc The document
   */
  constructor(
    public themeService: ThemeService,
    @Inject(DOCUMENT) private _doc: Document
  ) {}

  /**
   * When the darkmode button is pressed it toggles the light/dark mode
   */
  public toggleDarkMode(): void {
    this.themeService.updateLight();
  }

  @HostListener('window:resize', ['$event'])
  /**
   * Whenever the window is resized the screen is updated.
   */
  private onResize(event: any): void {
    this.updateScreen();
  }

  public switchTheme(theme: string): void {
    this.curColor = theme.slice(0, 1).toUpperCase() + theme.slice(1);
    this.themeService.setTheme(theme);
  }

  /**
   *
   * @returns a window object
   */
  private getWindow(): Window | null {
    return this._doc.defaultView;
  }

  /**
   * If the window width is greater than 960 pixel close the dropdown menu
   * so that is doesn't make the webpage have bad behaviors
   */
  private updateScreen(): void {
    if (window.innerWidth > 960) {
      this.isDropdownSelected = false;
    }
  }

  /**
   * Shows the drop down if hidden and hides it if it's showing
   */
  public toggleDropdown(): void {
    this.isDropdownSelected = !this.isDropdownSelected;
  }
}

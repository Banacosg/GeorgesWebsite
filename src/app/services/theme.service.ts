import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Dark mode signal
  lightSignal = signal<string>('dark');
  // Color signal
  themeSignal = signal<string>('black');

  /**
   * Sets the value of the theme
   * @param theme the dark/light theme
   */
  public setLight(theme: string) {
    this.lightSignal.set(theme);
  }

  /**
   * Notify all dependents of a new theme
   */
  public updateLight() {
    this.lightSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }

  /**
   * Sets the value of the color theme
   * @param theme the color theme
   */
  public setTheme(theme: string) {
    this.themeSignal.update((value) => theme);
  }

  /**
   * the image representing dark/light mode depending on the current
   * state
   * @returns the light/dark image
   */
  public getDarkModePhoto(): string {
    return this.lightSignal() === 'dark'
      ? '../../assets/lightmode.png'
      : '../../assets/darkmode.png';
  }

  constructor() {}
}

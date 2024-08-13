import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  lightSignal = signal<string>('dark');
  themeSignal = signal<string>('black');

  setLight(theme: string) {
    this.lightSignal.set(theme);
  }

  updateLight(theme: string) {
    this.lightSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }

  setTheme(theme: string) {
    this.themeSignal.set(theme);
  }

  getDarkModePhoto() {
    return this.lightSignal() === 'dark'
      ? '../../assets/lightmode.png'
      : '../../assets/darkmode.png';
  }

  constructor() {}
}

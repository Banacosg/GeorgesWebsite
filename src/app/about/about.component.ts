import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AboutInfo } from './aboutinfo';
import { AboutinfoService } from './aboutinfo.service';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ShowaboutComponent } from './showabout/showabout.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterLink, ShowaboutComponent, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutInfo: AboutInfo[];
  aboutInfoService: AboutinfoService;
  selectedAbout = false;
  document = inject(DOCUMENT);
  window: Window | null;
  @ViewChild('test') test?: ElementRef;

  constructor(aboutInfoService: AboutinfoService) {
    this.aboutInfoService = aboutInfoService;
    this.aboutInfo = this.aboutInfoService.getAboutInfo();
    this.selectedAbout = false;
    this.window = this.document.defaultView;
  }

  get200Chars(description: string) {
    return description.slice(0, 200);
  }

  showAbout(aboutInfo: AboutInfo) {
    this.aboutInfoService.setCurAbout(aboutInfo);
    this.selectedAbout = false;
    this.waitForElement('text-container');
    this.selectedAbout = true;
  }

  scroll(selector: string) {
    if (selector !== null) {
      const el = this.document.getElementById(selector);
      if (el !== null) {
        console.log(el);
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }

  waitForElement(selector: string) {
    let element = this.document.getElementById(selector);
    if (element) {
      this.scroll(selector);
      return;
    }
    let observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        let nodes = Array.from(mutation.addedNodes);
        for (let node of nodes) {
          if (node.contains(document.getElementById(selector))) {
            this.scroll(selector);
            observer.disconnect();
            return;
          }
        }
      });
    });
    observer.observe(this.document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
}

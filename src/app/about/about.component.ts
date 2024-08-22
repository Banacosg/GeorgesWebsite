import { Component, inject } from '@angular/core';
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
  selectedAbout = false;
  document = inject(DOCUMENT);
  window: Window | null;

  /**
   * Gets the information for about and initialized variable for the window and
   * current selection
   * @param aboutInfoService The service that provides the about information
   */
  constructor(private aboutInfoService: AboutinfoService) {
    this.aboutInfo = this.aboutInfoService.getAboutInfo();
    this.selectedAbout = false;
    this.window = this.document.defaultView;
  }

  /**
   *
   * @param description The about description
   * @returns The first 200 characters of the description string
   */
  get200Chars(description: string) {
    if (description.length > 200) {
      return description.slice(0, 200);
    } else {
      return description;
    }
  }

  /**
   * Sets the selected about to true and scrolls down to the newly added element
   * @param aboutInfo the AboutInfo object that was just selected
   */
  showAbout(aboutInfo: AboutInfo) {
    this.aboutInfoService.setCurAbout(aboutInfo);
    this.selectedAbout = false;
    // Scrolls to the new element when added
    this.waitForElement('text-container');
    this.selectedAbout = true;
  }

  /**
   * Scrolls to a given DOM element
   * @param selector The element to scroll to
   */
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

  /**
   * This function waits for an element to be added to the DOM tree and then
   * scrolls to that element. If the element is already in the DOM tree it
   * scrolls to that element.
   * @param selector The element to be scrolled to
   * @returns
   */
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

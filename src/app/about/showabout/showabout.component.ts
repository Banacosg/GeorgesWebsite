import { Component, inject, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AboutinfoService } from '../aboutinfo.service';
import { Observable, Subscribable, Subscriber, Subscription } from 'rxjs';
import { AboutInfo } from '../aboutinfo';
import { AboutComponent } from '../about.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-showabout',
  standalone: true,
  imports: [RouterLink, CommonModule, NgIf],
  templateUrl: './showabout.component.html',
  styleUrl: './showabout.component.css',
})
export class ShowaboutComponent {
  aboutInfo?: AboutInfo;
  constructor(private aboutInfoService: AboutinfoService) {
    aboutInfoService.curAboutInfo.subscribe((msg) => (this.aboutInfo = msg));
    this.aboutInfo = aboutInfoService.curAboutInfo.value;
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutinfoService } from '../aboutinfo.service';
import { AboutInfo } from '../aboutinfo';
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
  /**
   *
   * @param aboutInfoService The service that provides all about information
   */
  constructor(private aboutInfoService: AboutinfoService) {
    aboutInfoService.curAboutInfo.subscribe((msg) => (this.aboutInfo = msg));
  }
}

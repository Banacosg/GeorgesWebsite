import { Component, inject, OnInit } from '@angular/core';
import { Classes, Importance, Job, Software } from './experience';
import { ExperienceService } from './experience.service';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, JsonPipe, NgIf],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experienceService = inject(ExperienceService);
  software: Software[];
  classes: Classes[];
  jobs: Job[];
  importance = ['Very Important Only', 'Important', 'All'];
  curImportance = Importance.veryImportant;

  public constructor() {
    this.software = this.experienceService.getSoftware();
    this.classes = this.experienceService.getClasses();
    this.jobs = this.experienceService.getJobs();
  }

  public updateImportance(importance: string): void {
    if (importance === 'Very Important Only') {
      this.curImportance = Importance.veryImportant;
    } else if (importance === 'Important') {
      this.curImportance = Importance.important;
    } else {
      this.curImportance = Importance.unimportant;
    }
  }
}

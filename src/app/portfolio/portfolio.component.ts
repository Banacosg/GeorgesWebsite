import { Component } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects: Project[];
  private projectService: ProjectService;
  imagePopUp: string;
  imageDescriptionPopUp: string;

  constructor(projectService: ProjectService) {
    this.projectService = projectService;
    this.projects = this.projectService.getProjects();
    this.imagePopUp = '';
    this.imageDescriptionPopUp = '';
  }

  showImage(image: string, description: string) {
    this.imagePopUp = image;
    this.imageDescriptionPopUp = description;
  }

  closeImage() {
    this.imagePopUp = '';
  }
}

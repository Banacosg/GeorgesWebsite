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
  // The location of the image in string form
  imagePopUp: string;
  imageDescriptionPopUp: string;

  /**
   * Gets the project data and initializes the popup data to be nothing
   * @param projectService The service that provides all the project data
   */
  constructor(projectService: ProjectService) {
    this.projectService = projectService;
    this.projects = this.projectService.getProjects();
    this.imagePopUp = '';
    this.imageDescriptionPopUp = '';
  }

  /**
   * Sets the variables that are linked to the popup with image information
   * @param image The path to the image to be shown
   * @param description The description of the image to be shown
   */
  public showImage(image: string, description: string): void {
    this.imagePopUp = image;
    this.imageDescriptionPopUp = description;
  }

  /**
   * Sets the imagepopup variable to nothing which signals the html to hide
   * the image popup
   */
  public closeImage(): void {
    this.imagePopUp = '';
  }
}

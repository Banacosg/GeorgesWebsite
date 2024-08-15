export interface Project {
  name: string;
  year: number;
  description: string;
  projectType: string;
  imagePaths: ProjectImage[];
  projectLink: string;
  githubLink: string;
}

export interface ProjectImage {
  path: string;
  description: string;
}

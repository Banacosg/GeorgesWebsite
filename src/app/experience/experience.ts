export interface Software {
  softwareName: string;
  yearsOfExperience: number;
  description: string;
  skillLevel: number;
  importance: Importance;
}

export interface Job {
  jobName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  importance: Importance;
}

export interface Classes {
  className: string;
  school: string;
  toolsUsed: string[];
  learningDescription: string;
  importance: Importance;
}

export enum Importance {
  unimportant = 0,
  important = 1,
  veryImportant = 2,
}

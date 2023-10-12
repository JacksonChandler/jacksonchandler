import React from "react";

class ResumeModel {
  companies: CompanyModel[];
  education: EducationModel[];
  projects: ProjectModel[];

  constructor(
    companies: CompanyModel[],
    education: EducationModel[],
    projects: ProjectModel[]
  ) {
    this.companies = companies;
    this.education = education;
    this.projects = projects;
  }
}

class CompanyModel {
  datesWorked: string;
  jobs: JobModel[];

  constructor(datesWorked: string, jobs: JobModel[]) {
    this.datesWorked = datesWorked;
    this.jobs = jobs;
  }
}

class JobModel {
  title: string;
  projects: ProjectModel[];
  techs: TechModel[];

  constructor(title: string, projects: ProjectModel[], techs: TechModel[]) {
    this.title = title;
    this.projects = projects;
    this.techs = techs;
  }
}

class TechModel {
  tech: string;

  constructor(tech: string) {
    this.tech = tech;
  }
}

class EducationModel {
  school: string;
  degree: string;
  datesAttended: string;

  constructor(school: string, degree: string, datesAttended: string) {
    this.school = school;
    this.degree = degree;
    this.datesAttended = datesAttended;
  }
}

class ProjectModel {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

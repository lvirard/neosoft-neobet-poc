import { Experience } from "./experience";

export class Collaborator {
  id: number;
  name: string;
  surname: string;
  title: string;
  jobTitle: string;
  seniority: string;
  availability: string;
  startAvailability: string;
  createdAt: string;
  updatedAt: string;
  highlight: string;
  experiences: Experience[];
  skills: string[];
  document: { miniDC: string; image: string };
  office: { name: string };

  constructor(
    id: number,
    name: string,
    surname: string,
    title: string,
    jobTitle: string,
    seniority: string,
    availability: string,
    startAvailability: string,
    createdAt: string,
    updatedAt: string,
    highlight: string,
    experiences: [experience: Experience],
    skills: [skill: string],
    document: { miniDC: string; image: string },
    office: { name: string },
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.title = title;
    this.jobTitle = jobTitle;
    this.seniority = seniority;
    this.availability = availability;
    this.startAvailability = startAvailability;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.highlight = highlight;
    this.experiences = experiences;
    this.skills = skills;
    this.document = document;
    this.office = office;
  }
}

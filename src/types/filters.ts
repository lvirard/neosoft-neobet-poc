import { JobRepository } from "./JobRepository";

export class Filters {
  search: string;
  title?: JobRepository;
  office?: string;
  seniority?: string;
  availability?: string;

  constructor(
    search: string,
    title: JobRepository,
    office: string,
    seniority: string,
    availability: string,
  ) {
    this.search = search;
    this.title = title;
    this.office = office;
    this.seniority = seniority;
    this.availability = availability;
  }
}

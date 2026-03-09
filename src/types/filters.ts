import { JobRepository } from "./JobRepository";

export class Filters {
  search: string;
  title?: JobRepository;
  office?: string;
  seniority?: string;
  isAvailable?: boolean;

  constructor(
    search: string,
    title: JobRepository,
    office: string,
    seniority: string,
    isAvailable: boolean,
  ) {
    this.search = search;
    this.title = title;
    this.office = office;
    this.seniority = seniority;
    this.isAvailable = isAvailable;
  }
}

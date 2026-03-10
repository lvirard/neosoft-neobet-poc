export class Filters {
    search;
    title;
    office;
    seniority;
    isAvailable;
    constructor(search, title, office, seniority, isAvailable) {
        this.search = search;
        this.title = title;
        this.office = office;
        this.seniority = seniority;
        this.isAvailable = isAvailable;
    }
}

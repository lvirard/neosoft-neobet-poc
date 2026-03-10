export class Collaborator {
    id;
    name;
    surname;
    title;
    seniority;
    isAvailable;
    startAvailability;
    createdAt;
    updatedAt;
    highlight;
    experiences;
    skills;
    document;
    office;
    constructor(id, name, surname, title, seniority, isAvailable, startAvailability, createdAt, updatedAt, highlight, experiences, skills, document, office) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.title = title;
        this.seniority = seniority;
        this.isAvailable = isAvailable;
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

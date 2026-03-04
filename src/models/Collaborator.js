export class Collaborator {
    constructor(name, métier, compétences = {}) {
        this.name = name;
        this.métier = métier;
        this.compétences = {
            dev: compétences.dev || [],
            ops: compétences.ops || [],
            sec: compétences.sec || []
        };
    }
}
import { JobRepository } from "@/types/JobRepository";

export const titleOptions = Object.values(JobRepository);

export const officeOptions = ["Brest", "Rennes", "Paris"];

export const seniorityOptions = ["Débutant", "Confirmé", "Senior"];

export const availabilityOptions = [
  { title: "Disponible immédiatement", value: "immediate" },
  { title: "Disponible bientôt", value: "soon" },
];

// stores/profileStore.ts
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import rawData from "@/data/collaborators.json";
import { Collaborator } from "@/types/collaborator";
import { Filters } from "@/types/filters";

export const useCollaboratorStore = defineStore("collaborator", () => {
  const allCollaborators = ref<Collaborator[]>(
    rawData.map((entry) => entry.collaborator),
  );

  const filters = ref<Filters>({
    search: "",
    title: undefined,
    office: undefined,
    seniority: undefined,
    availability: undefined,
  });

  const favoriteCollaborators = ref<Collaborator[]>([]);

  // La liste filtrée des collaborateurs, calculée à partir de la liste complète et des filtres
  const filteredCollaborators = computed(() => {
    const searchString = (filters.value.search ?? "").toLowerCase();

    return allCollaborators.value.filter((p) => {
      //recherche dans les champs name, surname, highlight, skills et expériences (name et description)
      const matchSearch =
        !searchString ||
        [
          p.name,
          p.surname,
          p.highlight,
          ...p.skills,
          ...p.experiences.map((e) => e.name),
          ...p.experiences.map((e) => e.description),
        ].some((field) => field?.toLowerCase().includes(searchString));

      const matchTitle =
        !filters.value.title || p.title === filters.value.title;

      const matchOffice =
        !filters.value.office || p.office.name === filters.value.office;

      const matchSeniority =
        !filters.value.seniority || p.seniority === filters.value.seniority;

      const matchAvailability =
        !filters.value.availability ||
        (filters.value.availability === "immediate" &&
          p.availability === "immediate") ||
        (filters.value.availability === "soon" &&
          ["immediate", "soon"].includes(p.availability));


      return (
        matchSearch &&
        matchTitle &&
        matchOffice &&
        matchSeniority &&
        matchAvailability
      );
    });
  });

  const getNumberOfAvailableCollaborators = computed(() => {
    return filteredCollaborators.value.filter((e) => e.isAvailable === true)
      .length;
  });

  function setFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    filters.value[key] = value;
  }

  function resetFilters() {
    filters.value = {
      search: "",
      title: undefined,
      office: undefined,
      seniority: undefined,
      availability: undefined,
    };
  }

  function addToFavorites(collaborator: Collaborator) {
    if (!favoriteCollaborators.value.some((c) => c.id === collaborator.id)) {
      favoriteCollaborators.value.push(collaborator);
    }
  }

  function removeFromFavorites(collaborator: Collaborator) {
    favoriteCollaborators.value = favoriteCollaborators.value.filter(
      (c) => c.id !== collaborator.id,
    );
  }

  return {
    allCollaborators,
    filters,
    filteredCollaborators,
    getNumberOfAvailableCollaborators,
    setFilter,
    resetFilters,
    favoriteCollaborators,
    addToFavorites,
    removeFromFavorites,
  };
});

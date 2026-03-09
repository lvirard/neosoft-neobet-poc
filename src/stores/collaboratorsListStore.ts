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
    isAvailable: undefined,
  });

  // La liste filtrée des collaborateurs, calculée à partir de la liste complète et des filtres
  const filteredCollaborators = computed(() => {
    return allCollaborators.value.filter((p) => {
      //recherche dans les champs name, surname, highlight, skills et expériences (name et description)
      const matchSearch =
        !filters.value.search.toLowerCase() ||
        [
          p.name,
          p.surname,
          p.highlight,
          ...p.skills,
          ...p.experiences.map((e) => e.name),
          ...p.experiences.map((e) => e.description),
        ].some((field) =>
          field?.toLowerCase().includes(filters.value.search.toLowerCase()),
        );

      const matchTitle =
        !filters.value.title || p.title === filters.value.title;

      const matchOffice =
        !filters.value.office || p.office.name === filters.value.office;

      const matchSeniority =
        !filters.value.seniority || p.seniority === filters.value.seniority;

      const matchIsAvailable =
        !filters.value.isAvailable || p.isAvailable === true;

      return (
        matchSearch &&
        matchTitle &&
        matchOffice &&
        matchSeniority &&
        matchIsAvailable
      );
    });
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
      isAvailable: undefined,
    };
  }

  return {
    allCollaborators,
    filters,
    filteredCollaborators,
    setFilter,
    resetFilters,
  };
});

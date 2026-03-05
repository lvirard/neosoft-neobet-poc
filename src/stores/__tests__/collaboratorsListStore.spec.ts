// stores/__tests__/profileStore.spec.ts
import { setActivePinia, createPinia } from 'pinia';
import { useCollaboratorStore } from '../collaboratorsListStore';
import { beforeEach, describe, expect, it } from 'vitest';

describe('collaboratorsListStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('charge tous les profils au démarrage', () => {
    const store = useCollaboratorStore();
    expect(store.allCollaborators.length).toBeGreaterThan(0);
  })

  it('filtre par nom', () => {
    const store = useCollaboratorStore();
    store.setFilter('search', 'John');

    expect(store.filteredCollaborators.every(c =>
      c.name.toLowerCase().includes('virard')
    )).toBe(true);
  })

  it('retourne tous les profils si aucun filtre', () => {
    const store = useCollaboratorStore();
    store.resetFilters();

    expect(store.filteredCollaborators.length).toBe(store.allCollaborators.length);
  })

  it('filtre par disponibilité', () => {
    const store = useCollaboratorStore();
    store.setFilter('isAvailable', true);

    expect(store.filteredCollaborators.every(c => c.isAvailable)).toBe(true);
  })

  it('filtre par agence', () => {
    const store = useCollaboratorStore();
    store.setFilter('office', 'Brest');

    expect(store.filteredCollaborators.every(c => c.office.name === 'Brest')).toBe(true);
  })

  it('filtre par titre', () => {
    const store = useCollaboratorStore();
    store.setFilter('title', 'SOFTWARE_ENGINEERING');

    expect(store.filteredCollaborators.every(c => c.title === 'SOFTWARE_ENGINEERING')).toBe(true);
  })

  it('filtre par séniorité', () => {
    const store = useCollaboratorStore();
    store.setFilter('seniority', 'Senior');

    expect(store.filteredCollaborators.every(c => c.seniority === 'Senior')).toBe(true);
  })

  it('reset remet bien tous les filtres à zéro', () => {
    const store = useCollaboratorStore();
    store.setFilter('search', 'John');
    store.setFilter('isAvailable', true);
    store.setFilter('office', 'Brest');
    store.setFilter('title', 'SOFTWARE_ENGINEERING');
    store.setFilter('seniority', 'Senior');
    store.resetFilters();

    expect(store.filters.search).toBe('');
    expect(store.filters.isAvailable).toBeUndefined();
    expect(store.filters.office).toBeUndefined();
    expect(store.filters.title).toBeUndefined();
    expect(store.filters.seniority).toBeUndefined();
  })
})
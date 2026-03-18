import { useRouter, type RouteLocationRaw } from "vue-router";
import type { Collaborator } from "@/types/collaborator";

export function useCollaboratorNavigation() {
  const router = useRouter();

  function getCollaboratorDetailRoute(collaborator: Collaborator): RouteLocationRaw {
    return {
      name: "detail",
      params: { name: collaborator.name },
    };
  }

  function goToCollaboratorDetail(collaborator: Collaborator) {
    router.push(getCollaboratorDetailRoute(collaborator));
  }

  return { getCollaboratorDetailRoute, goToCollaboratorDetail };
}

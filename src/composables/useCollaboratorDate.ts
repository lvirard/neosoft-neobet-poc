import { useDate } from "vuetify";

export function useCollaboratorDate() {
  const date = useDate();

  function formatAvailabilityDate(dateValue: string | number | Date | undefined) {
    if (dateValue === undefined || dateValue === null) return "";
    return date.format(dateValue, "fullDate");
  }

  return { formatAvailabilityDate };
}

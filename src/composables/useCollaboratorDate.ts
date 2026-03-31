export function useCollaboratorDate() {

  function getMonthsToAvailability(
    startAvailabilityDate: string | number | Date | undefined,
  ) {
    if (startAvailabilityDate === undefined || startAvailabilityDate === null)
      return 0;
    const startDate = new Date(startAvailabilityDate);
    const today = new Date();
    const yearsDiff = startDate.getFullYear() - today.getFullYear();
    const monthsDiff = startDate.getMonth() - today.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;
    return totalMonths + " mois";
  }

  return { getMonthsToAvailability };
}

import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import type { FilterValues } from "../components/LogsFilters";
import type { LogEntry } from "../data/logs";

export function parseLogDate(date: string) {
  return dayjs(date, "DD/MM/YYYY");
}

export function matchesFilters(entry: LogEntry, applied: FilterValues) {
  if (applied.period?.[0] && applied.period?.[1]) {
    const [start, end] = applied.period as [Dayjs, Dayjs];
    const occurred = parseLogDate(entry.date);
    if (occurred.isBefore(start, "day") || occurred.isAfter(end, "day")) {
      return false;
    }
  }

  if (applied.operations?.length && !applied.operations.includes(entry.operation)) {
    return false;
  }

  const query = applied.user?.trim().toLowerCase();
  if (query && !entry.user.toLowerCase().includes(query)) {
    return false;
  }

  return true;
}

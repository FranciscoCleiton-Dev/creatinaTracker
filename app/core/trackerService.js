import { getData, saveData } from "./storage.js";

function cleanOldData(data) {
  const today = new Date();
  const newData = {};
  for (const [date, value] of Object.entries(data)) {
    const diff = (today - new Date(date)) / (1000 * 60 * 60 * 24);
    if (diff <= 30) newData[date] = value;
  }
  return newData;
}

export function markToday() {
  const today = new Date().toISOString().split("T")[0];
  const data = getData();
  data[today] = true;
  const cleaned = cleanOldData(data);
  saveData(cleaned);
  return cleaned;
}

export function getHistory() {
  const data = getData();
  const cleaned = cleanOldData(data);
  saveData(cleaned);
  return cleaned;
}

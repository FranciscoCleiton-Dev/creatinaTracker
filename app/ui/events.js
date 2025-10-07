import { markToday, getHistory } from "../core/trackerService.js";
import { renderHistory } from "./renderer.js";

export function setupEvents() {
  document.getElementById("markButton").addEventListener("click", () => {
    const updated = markToday();
    renderHistory(updated);
  });
}

export function loadInitialHistory() {
  const history = getHistory();
  renderHistory(history);
}

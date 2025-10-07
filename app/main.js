import { setupEvents, loadInitialHistory } from "./ui/events.js";

document.addEventListener("DOMContentLoaded", () => {
  loadInitialHistory();
  setupEvents();
});

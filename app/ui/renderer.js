export function renderHistory(data) {
  const list = document.getElementById("history");
  list.innerHTML = "";

  const dates = Object.keys(data).sort((a, b) => new Date(b) - new Date(a));

  dates.forEach(date => {
    const li = document.createElement("li");
    li.textContent = `${date} — ${data[date] ? "✅ Tomou" : "❌ Não tomou"}`;
    list.appendChild(li);
  });
}

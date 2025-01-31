// variant 1 copilot
function filterContent(category) {
  const contents = document.querySelectorAll(".content");
  contents.forEach(function (content) {
    if (category === "all" || content.classList.contains(category)) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
}
// variant 2
function filter(button, filterSelector, ItemSelector) {
  const buttons = document.querySelectorAll(button);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute(filterSelector);
      const items = document.querySelectorAll(ItemSelector);

      items.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });

      // Удаляем класс 'active' у всех кнопок и добавляем его только на текущую
      buttons.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

filter(".filter-btn", "data-filter", ".article__item");

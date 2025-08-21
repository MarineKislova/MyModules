document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // аккордион

  function toggleAccordion(toggleSelector, itemSelector, iconSelector) {
    const accordionToggle = document.querySelectorAll(toggleSelector);
    accordionToggle.forEach((item) => {
      item.addEventListener("click", () => {
        removeCollapsedClass();
        item.closest(itemSelector).classList.add("collapsed");
        const content = item.nextElementSibling;
        content.style.display =
          content.style.display == "flex" ? "none" : "flex";
        const icon = item.querySelector(iconSelector);
        icon.textContent = icon.textContent == "+" ? "-" : "+";
      });
    });
  }
  toggleAccordion(".accordion-toggle", ".accordion-item", ".accordion-icon");

  const accordionItems = document.querySelectorAll(".accordion-item");
  console.log(accordionItems);

  function removeCollapsedClass() {
    accordionItems.forEach((items) => {
      items.classList.remove("collapsed");
    });
  }
});

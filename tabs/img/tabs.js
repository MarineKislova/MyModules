window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // tab one
  // let tab = document.querySelectorAll(".tab-btn"),
  //   tabsContent = document.querySelectorAll(".tab-contentjs__item"),
  //   tabsParent = document.querySelector(".tab-contentjs");

  // tab.forEach((item) => {
  //   item.style.color = "red";
  //   item.style.fontSize = 36 + "px";
  // });

  // tabsContent.forEach((item) => {
  //   item.classList.add("show");
  // });

  function tabs({ selectorTab, selectorContent, selectorParent, activeClass }) {
    const tabs = document.querySelectorAll(selectorTab);
    const tabsContent = document.querySelectorAll(selectorContent);
    const tabsParent = document.querySelector(selectorParent);

    function hideTabContent() {
      tabsContent.forEach((item) => {
        item.style.display = "none";
      });
      tabs.forEach((item) => {
        item.classList.remove(activeClass);
        if (!item.classList.contains(activeClass)) {
          item.style.color = "#696969";
          item.style.textDecoration = "none";
        }
      });
    }

    function showTabContent(i) {
      tabsContent[i].style.display = "block";
      tabs[i].classList.add(activeClass);
      if (tabs[i].classList.contains(activeClass)) {
        tabs[i].style.color = "#696969";
        tabs[i].style.textDecoration = "underline";
        // tabs[i].style.transition = "1s all";
      }
    }

    hideTabContent();
    showTabContent(0);

    tabs.forEach((item, i) => {
      item.addEventListener("click", () => {
        hideTabContent();
        showTabContent(i);
      });
    });

    tabsParent.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.classList.contains(tabs)) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }

  tabs({
    selectorContent: ".tab-contentjs__item",
    selectorTab: ".tab-btn",
    selectorParent: ".tab-contentjs",
    activeClass: ".tab-btn-active",
  });

  // tabs("tab-btn");
});

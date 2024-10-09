window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  function popUpWindow({ closeSelector, parentSelector }) {
    // const modalTimerClose = setTimeout(
    //   () => hideModal(parentSelector, modalTimerClose),
    //   5000
    // );

    let closeModal = document.querySelectorAll(closeSelector); //закомментировано для динамического формирования
    let parentModal = document.querySelector(parentSelector);

    function showModal() {
      parentModal.style.display = "block";
    }

    function hideModal() {
      parentModal.style.display = "none";
    }

    closeModal.forEach((item) => {
      item.style.opacity = 0;
      setTimeout(() => {
        item.style.opacity = 0.8;
      }, 5000); //emergence close button after open popup
      item.addEventListener("click", hideModal);
    });

    parentModal.addEventListener("click", (e) => {
      if (e.target === parentModal) {
        hideModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        hideModal();
      }
    });

    function showByScroll() {
      // let offsetTop = parentModal.offsetTop;
      // let offsetTop = document.documentElement.offsetTop;
      let scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY >= 100) { //offsetTop + scrollY 
        const modalTimerId = setTimeout(
          () => showModal(parentSelector, modalTimerId),
          1000
        );

        //* disappearing popup after open
        // const modalTimerClose = setTimeout(
        //   () => hideModal(parentSelector, modalTimerClose),
        //   5000
        // );

        window.removeEventListener("scroll", showByScroll);
      }
    }

    window.addEventListener("scroll", showByScroll);
  }

  popUpWindow({
    closeSelector: "[data-closemodal]",
    parentSelector: ".modal-window",
  });
});

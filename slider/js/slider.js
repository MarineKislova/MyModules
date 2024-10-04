window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  //slider
  function slider({
    lineSelector,
    wrapperSelector,
    itemSelector,
    arrowNextSelector,
    arrowPrevSelector,
  }) {
    let offset = 0;
    const sliderLine = document.querySelector(lineSelector);
    const wrapper = document.querySelector(wrapperSelector);
    const slides = document.querySelectorAll(itemSelector);
    const width = window.getComputedStyle(wrapper).width;
    const arrowNext = document.querySelector(arrowNextSelector);
    const arrowPrev = document.querySelector(arrowPrevSelector);

    // delete non-digit characters from string using regex and convert to number using parseInt() function
    function deleteNotDigits(str) {
      return +str.replace(/\D/g, "");
    }

    // Slider navigation next button
    arrowNext.addEventListener("click", () => {
      // offsetLeft = offsetLeft + parseInt(width);

      if (offset == deleteNotDigits(width) * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += deleteNotDigits(width);
      }

      sliderLine.style.transform = `translateX(-${offset}px)`;
    });

    //  Slider navigation prev button
    arrowPrev.addEventListener("click", () => {
      // offsetLeft = offsetLeft - parseInt(width);

      if (offset == 0) {
        offset = deleteNotDigits(width) * (slides.length - 1);
      } else {
        offset -= deleteNotDigits(width);
      }

      sliderLine.style.transform = `translateX(-${offset}px)`;
    });

    // // Auto slide
    // function autoSlideInterval() {
    //   setInterval(() => {
    //     arrowNext.click();
    //   }, 3000);
    // }

    // autoSlideInterval();

    // // Click on slides to navigate to the corresponding slide
    // slides.forEach((item) => {
    //   item.addEventListener("mousedown", () => {
    //     arrowNext.click();
    //   });
    // });
  }

  slider({
    lineSelector: ".slider__line",
    wrapperSelector: ".slider__wrapper",
    itemSelector: ".slider__item",
    arrowNextSelector: ".slider__btn--next",
    arrowPrevSelector: ".slider__btn--prev",
  });

  function rollBanner({
    wrapperSelector,
    lineSelector,
    itemSelector,
    dotSelector,
  }) {
    let count = 0;
    let width;
    const banner = document.querySelector(wrapperSelector);
    const bannerLine = document.querySelector(lineSelector);
    const bannerItems = document.querySelectorAll(itemSelector);
    const dots = document.querySelectorAll(dotSelector);
    width = bannerItems[0].clientWidth;
    bannerLine.style.width = width * bannerItems.length + "px";

    function rollSlide() {
      count++;

      if (count == bannerItems.length) {
        count = 0;
      }

      bannerLine.style.transform = `translateX(-${width * count}px)`;
      dotNavigation();
    }

    setInterval(rollSlide, 3000);

    //dots navigation
    function dotNavigation() {
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[count].classList.add("active");
    }
  }

  rollBanner({
    wrapperSelector: ".banner",
    lineSelector: ".banner__line",
    itemSelector: ".banner__item",
    dotSelector: ".banner__dot",
  });

  function sliderDotsNavigation({
    wrapperSelector,
    lineSelector,
    itemSelector,
    dotSelector,
  }) {
    let count = 0;
    let width;
    const slider = document.querySelector(wrapperSelector);
    const sliderLine = document.querySelector(lineSelector);
    const sliderItems = document.querySelectorAll(itemSelector);
    const dots = document.querySelectorAll(dotSelector);

    width = sliderItems[0].clientWidth;
    sliderLine.style.width = width * sliderItems.length + "px";

    // Click on dots to navigate to the corresponding slide
    dots.forEach((item, i) => {
      item.addEventListener("click", () => {
        count = i;
        sliderLine.style.transform = `translateX(-${width * count}px)`;

        dots.forEach((dot) => dot.classList.remove("active"));
        dots[count].classList.add("active");

        //
      });
    });
  }

  sliderDotsNavigation({
    wrapperSelector: ".slider-dots__wrapper",
    lineSelector: ".slider-dots__line",
    itemSelector: ".slider-dots__item",
    dotSelector: ".slider-dots__light",
  });
});

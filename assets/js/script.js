'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }

    document.querySelector(".navbar-link").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default jump
        document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
    });

document.addEventListener("DOMContentLoaded", function () {
    // Select the "About" link
    const aboutLink = document.querySelector('.navbar-list .navbar-link[href="index.html"]');

    if (aboutLink) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior if needed
            window.location.href = "index.html"; // Redirect to index.html
        });
    }

    // Dropdown Menu Handling (Optional)
    const dropdown = document.querySelector(".dropdown");
    
    if (dropdown) {
        dropdown.addEventListener("mouseover", function () {
            this.querySelector(".dropdown-menu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").style.display = "none";
        });
    }
});
  document.querySelector(".nav-open-btn").addEventListener("click", function() {
    document.querySelector(".navbar-list").classList.toggle("active");
});


// document.querySelector(".nav-open-btn").addEventListener("click", function() {
    
//   document.querySelector(".navbar-list").classList.toggle("active");
// });


// Footer to Contact US in URL
  function scrollToFooter(event) {
    event.preventDefault();  // Prevent default navigation
    window.history.pushState(null, null, "/Contact");  // Change the URL without reloading
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  }
  // Footer to contact us code end

// get in touch

  function openForm() {
    document.getElementById("popupForm").style.display = "flex";
  }

  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

// get in touch end

// Terms & Conditions

  function openTerms() {
    document.getElementById("termsPopup").style.display = "flex";
  }

  function closeTerms() {
    document.getElementById("termsPopup").style.display = "none";
  }

  function acceptTerms() {
    alert("Thank you for accepting the Terms and Conditions.");
    closeTerms();
  }

// Privacy & Policy

function openprivacy() {
  document.getElementById("privacyPopup").style.display = "flex";
}

function closeprivacy() {
  document.getElementById("privacyPopup").style.display = "none";
}

// Javascript for accessing career catalyst payment form.
document.getElementById("career-catalyst-payment").addEventListener("click", function() {
  window.location.href = "https://payments.cashfree.com/forms/careercatalyst";
});

// Javascript end for accessing career catalyst payment form.

// Javascript for accessing upcoming batch form.

document.getElementById("Upcoming-Batch-payment").addEventListener("click", function() {
  window.location.href = "https://payments.cashfree.com/forms/UpComingbatch";
});

// Javascript end for accessing upcoming batch form.

// Javascript for othe program, which are not ready now for enrollment- we will chnage the id and link later.
document.getElementById("notlive").addEventListener("click", function() {
  window.location.href = "inservice.html"; 
});
// Javascript end for othe program, which are not ready now for enrollment- we will chnage the id and link later.
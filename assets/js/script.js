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

// Cancellation & Refund
function opencrpolicy() {
  document.getElementById("crpolicyPopup").style.display = "flex";
}

function closecrpolicy() {
  document.getElementById("crpolicyPopup").style.display = "none";
};

// Javascript for star animation

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 10 + 5; // Random size between 5px and 15px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  const posX = Math.random() * window.innerWidth;
  const posY = Math.random() * window.innerHeight;
  star.style.left = `${posX}px`;
  star.style.top = `${posY}px`;

  document.getElementById("star-container").appendChild(star);

  setTimeout(() => {
      star.remove(); // Remove star after animation
  }, 1000);
}

// Create stars at intervals
setInterval(createStar, 300);


// Javascript for Side Buttons
function showPopup(page) {
  const popup = document.getElementById('popup');
  const iframe = document.getElementById('popupFrame');
  iframe.src = page;
  popup.style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

document.addEventListener('click', function(event) {
  const popup = document.getElementById('popup');
  if (!popup.contains(event.target) && !event.target.classList.contains('side-button')) {
      popup.style.display = 'none';
  }
});

// Javascript for Side Buttons end


//Stats Counter Animation
function animateNumbers(target, start, end, duration) {
  let range = end - start;
  let startTime = null;

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    let progress = Math.min((currentTime - startTime) / duration, 1);
    target.innerText = Math.floor(progress * range + start);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function startCounterAnimation(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let numbers = entry.target.querySelectorAll(".stats-card .h1");

      numbers.forEach(num => {
        let endValue = parseInt(num.innerText.replace("+", ""));
        animateNumbers(num, 0, endValue, 2000);
      });

      observer.unobserve(entry.target); // Stop observing once animation runs
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let statsSection = document.querySelector(".stats");
  
  if (statsSection) {
    let observer = new IntersectionObserver(startCounterAnimation, {
      threshold: 0.5, // Triggers when 50% of the section is visible
    });

    observer.observe(statsSection);
  }
});

//Typing Animation

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".hero-title");
  const text = "Crafting Data Analyst from Non-IT.";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // Adjust speed (100ms per letter)
    }
  }

  textElement.innerHTML = ""; // Clear existing text
  typeText();
});


// Typing Animation end

function typeEffect(element, text, speed) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML = text.substring(0, i + 1) + '<span class="typing"></span>';
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", function () {
  let headings = document.querySelectorAll(".h2");

  headings.forEach((heading) => {
    let text = heading.innerText;
    heading.innerText = ""; // Clear text before animation
    typeEffect(heading, text, 100); // 100ms per character
  });
});


// 404 Page Dynamicaly Pop
// Check if the page exists in the site structure
window.addEventListener("DOMContentLoaded", function () {
  fetch(window.location.pathname)
      .then(response => {
          if (!response.ok) {
              // If the response is not found (404), redirect to custom 404 page
              window.location.href = "/404.html";
          }
      })
      .catch(() => {
          // If there's an error fetching the page, assume it's missing
          window.location.href = "/404.html";
      });
});

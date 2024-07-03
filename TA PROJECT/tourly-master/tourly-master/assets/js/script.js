'use strict';

/**
 * navbar toggle
 */

const url = 'https://sky-scanner3.p.rapidapi.com/get-config';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd48ddd5782mshfb408088175f10ep16adffjsn832a2065a015',
		'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com'
	}
};


async function testAPI(){
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    console.log("API Working")
  } catch (error) {
    console.error(error);
  }
}

testAPI();




const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", (e) => {
  console.log(e);
});

new Glider(document.querySelector(".glider"), {
  slidesToShow: 3,
  slidesToScroll: 5,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});

// (function ($) {
//   "use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
// $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
//   if (
//     location.pathname.replace(/^\//, "") ==
//       this.pathname.replace(/^\//, "") &&
//     location.hostname == this.hostname
//   ) {
//     var target = $(this.hash);
//     target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//     if (target.length) {
//       $("html, body").animate(
//         {
//           scrollTop: target.offset().top - 70,
//         },
//         1000,
//         "easeInOutExpo"
//       );
//       return false;
//     }
//   }
// });

// Closes responsive menu when a scroll trigger link is clicked
// $(".js-scroll-trigger").click(function () {
//   $(".navbar-collapse").collapse("hide");
// });

// Activate scrollspy to add active class to navbar items on scroll
// $("body").scrollspy({
//   target: "#mainNav",
//   offset: 100,
// });

// Collapse Navbar
// var navbarCollapse = function () {
//   if ($("#mainNav").offset().top > 100) {
//     $("#mainNav").addClass("navbar-shrink");
//   } else {
//     $("#mainNav").removeClass("navbar-shrink");
//   }
// };
// Collapse now if page is not at top
// navbarCollapse();
// Collapse the navbar when page is scrolled
//   $(window).scroll(navbarCollapse);
// })(jQuery); // End of use strict

// new Gliderr(document.querySelector(".glider"), {
//   slidesToShow: 5,
//   slidesToScroll: 5,
//   draggable: true,
//   dots: ".dots",
//   arrows: {
//     prev: ".glider-prev",
//     next: ".glider-next",
//   },
// });

// ////////////animated counter//////////////////

const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
});

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

$(".navigate-section > li > a[href*=#], a.navigate-btn[href*=#]").on(
  "click",
  function (event) {
    event.preventDefault();
    var dataOffset = 0;

    if ($(this).is("[data-offset]")) {
      dataOffset = parseInt($(this).attr("data-offset"));
    }

    var offset = 90 - dataOffset;
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - offset,
      },
      500,
      "linear"
    );
  }
);

// function initMap() {
//   var location = {
//     lat: 29.311661,
//     lng: 47.481766,
//   };
//   var map = new google.map.Maps(document.getElementById("map"), {
//     zoom: 4,
//     center: location,
//   });
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map,
//   });
// }

// var rateLine = $(".contact-form__rate-bx"),
//   rateActual = $(".rate-actual");

// rateLine.find("i").on("hover", function () {
//   var indexStar = $(this).index();
//   for (var j = 0; j <= 9; j++) {
//     rateLine.find("i:lt(" + indexStar + 1 + ")").addClass("active");
//     rateLine.find("i:gt(" + indexStar + ")").removeClass("active");
//   }
// });

// rateLine.find("i").on("click", function () {
//   var indexStar = $(this).index();
//   for (var j = 0; j <= 9; j++) {
//     rateLine.find("i:lt(" + indexStar + 1 + ")").addClass("selected");
//     rateLine.find("i:gt(" + indexStar + ")").removeClass("selected");
//   }
//   rateActual.text(indexStar + 1);
// });

// rateLine.on("mouseout", function () {
//   rateLine.find("i").removeClass("active");
// });

// external js: isotope.pkgd.js

// init Isotope
// var $grid = $(".grid").isotope({
//   itemSelector: ".element-item",
//   layoutMode: "fitRows",
//   getSortData: {
//     name: ".name",
//     symbol: ".symbol",
//     number: ".number parseInt",
//     category: "[data-category]",
//     weight: function (itemElem) {
//       var weight = $(itemElem).find(".weight").text();
//       return parseFloat(weight.replace(/[\(\)]/g, ""));
//     },
//   },
// });

// // filter functions
// var filterFns = {
//   // show if number is greater than 50
//   numberGreaterThan50: function () {
//     var number = $(this).find(".number").text();
//     return parseInt(number, 10) > 50;
//   },
//   // show if name ends with -ium
//   ium: function () {
//     var name = $(this).find(".name").text();
//     return name.match(/ium$/);
//   },
// };

// // bind filter button click
// $("#filters").on("click", "button", function () {
//   var filterValue = $(this).attr("data-filter");
//   // use filterFn if matches value
//   filterValue = filterFns[filterValue] || filterValue;
//   $grid.isotope({ filter: filterValue });
// });

// // bind sort button click
// $("#sorts").on("click", "button", function () {
//   var sortByValue = $(this).attr("data-sort-by");
//   $grid.isotope({ sortBy: sortByValue });
// });

// // change is-checked class on buttons
// $(".button-group").each(function (i, buttonGroup) {
//   var $buttonGroup = $(buttonGroup);
//   $buttonGroup.on("click", "button", function () {
//     $buttonGroup.find(".is-checked").removeClass("is-checked");
//     $(this).addClass("is-checked");
//   });
// });

// scrollFunction();

// var submitContact = $("#submit_contact"),
//   message = $("#msg");

// submitContact.on("click", function (e) {
//   e.preventDefault();

//   var $this = $(this);

//   $.ajax({
//     type: "POST",
//     url: "contact.php",
//     dataType: "json",
//     cache: false,
//     data: $("#contact-form").serialize(),
//     success: function (data) {
//       if (data.info !== "error") {
//         $this
//           .parents("form")
//           .find("input[type=text],textarea,select")
//           .filter(":visible")
//           .val("");
//         message
//           .hide()
//           .removeClass("alert-success")
//           .removeClass("alert-danger")
//           .addClass("alert-success")
//           .html(data.msg)
//           .fadeIn("slow")
//           .delay(5000)
//           .fadeOut("slow");
//       } else {
//         message
//           .hide()
//           .removeClass("alert-success")
//           .removeClass("alert-danger")
//           .addClass("alert-danger")
//           .html(data.msg)
//           .fadeIn("slow")
//           .delay(5000)
//           .fadeOut("slow");
//       }
//     },
//   });
// });

// //////////////////////sign in firebase///////////////////////////

// firebase
//   .auth()
//   .createUserWithEmailAndPassword(email, password)
//   .catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btnn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activve");
    current[0].className = current[0].className.replace(" activve", "");
    this.className += " activve";
  });
}

// function bbtn() {
//   alert("test");
// }

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

// //////////////////////sign in firebase///////////////////////////

firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

function int14() {
  const input = document.getElementById("inputValue").value;
  const number = parseInt(input);
  const yuzlik = (number - (number % 100)) / 100;
  const onlik = ((number % 100) - (number % 10)) / 10;
  const birlik = number % 10;
  const result = birlik * 100 + yuzlik * 10 + onlik;
  document.getElementById("output").innerText = `Yangi son: ${result}`;
}

function int18() {
  const input18 = document.getElementById("inputValue18").value;
  const number18 = parseInt(input18);
  const int18 = (number18 / 1000) % 10;
  document.getElementById("output18").innerText =
    "Mingliklar xonasidagi raqam: " + Math.floor(int18);
}

function int11() {
  const input11 = document.getElementById("inputValue11").value;
  const number11 = parseInt(input11);
  const hundred = (number11 - (number11 % 100)) / 100;
  const ten = ((number11 % 100) - (number11 % 10)) / 10;
  const one = number11 % 10;
  const result11 = hundred + ten + one;
  document.getElementById(
    "output11"
  ).innerText = `Raqamlar yig'indisi: ${result11}`;
}

function int12() {
  const input12 = document.getElementById("inputValue12").value;
  const number12 = parseInt(input12);
  const hundred12 = (number12 - (number12 % 100)) / 100;
  const ten12 = ((number12 % 100) - (number12 % 10)) / 10;
  const one12 = number12 % 10;
  const reverse12 = one12 * 100 + ten12 * 10 + hundred12;
  document.getElementById(
    "output12"
  ).innerText = `Raqamlar yig'indisi: ${reverse12}`;
}

function int21() {
  const input21 = document.getElementById("inputValue21").value;
  const givenSec = parseInt(input21);
  const min = givenSec / 60 - ((givenSec / 60) % 1);
  const sec = givenSec % 60;
  document.getElementById(
    "output21"
  ).innerText = `${min} minut va ${sec} sekund o‘tgan`;
}

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}

// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});


// Sayt to'liq yuklangandan so'ng
window.addEventListener("load", function () {
  const loading = document.getElementById("loader");
  loading.style.display = "none"; // Loading ekranini yashirish
});

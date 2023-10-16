AOS.init({
  delay: "30",
  duration: "3000",
  // mirror: true,
});

const chk = document.getElementById("chk");
chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("darkMode").classList.toggle("fa-sun");
  document.getElementById("darkMode").classList.toggle("fa-moon");
});



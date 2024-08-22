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



const redesSociais = () => {
  const redes = document.querySelectorAll(".redesSociaisLista");

  redes.forEach((element) => {
    element.innerHTML = ` 
      <ul class="containerRedesSociais">
       <li><a href="https://www.instagram.com/akarenalana/"><i class="fa-brands fa-instagram"></i></a></li>
       <li><a href="https://www.youtube.com/@KarenAlana"><i class="fa-brands fa-youtube"></i></a></li>       
        <li><a href="https://www.linkedin.com/in/karen-alana/"><i class="fa-brands fa-linkedin"></i></a></li>   
        <li><a href="https://github.com/KarenAlana"><i class="fa-brands fa-github"></i></a></li>
        <li><a href="mailto:karenalana33@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>        
       
      </ul>`;
  });
};

redesSociais();


const abrirContatos = () => {
  const contatos = document.querySelectorAll(".contactsItens");
  contatos.forEach((element) => {
    element.style.display = "flex";
  });
};

const fecharContatos = () => {
 const contatos = document.querySelectorAll(".contactsItens");
  contatos.forEach((element) => {
    element.style.display = "none";
  });
};

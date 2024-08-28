function handleMenuClick() {
  const navbar = document.getElementById("navbar");
  const dropdown = document.getElementById("dropdown");
  const hamburger = document.getElementById("hamburger");
  if (dropdown.classList.contains("hidden")==true){
    dropdown.classList.remove("hidden")
    navbar.classList.replace("text-white", "text-black")
    hamburger.setAttribute("stroke", "black")
    navbar.classList.remove("drop-shadow-md")
    document.body.classList.add("stop-scrolling")
  } else {
    dropdown.classList.add("hidden")
    if (window.scrollY==0){
      hamburger.setAttribute("stroke", "white")
      navbar.classList.replace("text-black", "text-white")
    }
    navbar.classList.add("drop-shadow-md")
    document.body.classList.remove("stop-scrolling")
  }
};

window.addEventListener("scroll", (event) => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  if (window.scrollY==0){
    navbar.classList.replace("bg-white", "bg-transparent")
    navbar.classList.replace("text-black", "text-white")
    hamburger.setAttribute("stroke", "white")
  } else {
    navbar.classList.replace("bg-transparent", "bg-white")
    navbar.classList.replace("text-white", "text-black")
    hamburger.setAttribute("stroke", "black")
  }
});